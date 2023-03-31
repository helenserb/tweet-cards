import { Component } from "react";
import { nanoid } from 'nanoid';
import Form from "./Form/Form";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  
  addContact = data => {
    const isExist = this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isExist) {
      alert(`${data.name} is alredy in contacts`);
      return;
    } else {
      return this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: data.name, number: data.number },
        ],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contacts => contacts.id !== id),
    }));
  };

  render = () => {
    const normaizdeFilter = this.state.filter.toLowerCase();
    const visilbleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normaizdeFilter)
    );
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} value={this.state.filter} />
        {this.state.contacts && <ContactList
          contacts={visilbleContacts}
          onDelete={this.deleteContact}
        />}
      </>
    );
  };
}


export default App;

