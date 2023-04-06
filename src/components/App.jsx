import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import { Form } from "./Form/Form";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";


export default function App () {
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    return parsedContacts ? parsedContacts : [];
  });
  const [filter, setFilter] = useState('');
  
useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);

  const addContact = ({ name, number }) => {

    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`${name} is alredy in contacts`);
      return;
    } else {
      return setContacts(prevState => [
          ...prevState,
          { id: nanoid(), name, number }]);
    }
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = id => {
    setContacts(prevState => (
  prevState.filter(contacts => contacts.id !== id)
    ));
  };

  const normalizedFilter = filter.toLowerCase();
  const visilbleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <h1>Phonebook</h1>
      <Form addContact={addContact} />
      <h2>Contacts</h2>
      <Filter onChange={changeFilter} value={filter} />
      {contacts && (
        <ContactList contacts={visilbleContacts} onDelete={deleteContact} />
      )}
    </>
  );
}