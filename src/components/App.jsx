import { Component } from "react";
import { nanoid } from 'nanoid';
import Form from "./Form/Form";
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

  // createContact = data => {
  //     this.setState(() => {
  //       if (
  //         this.state.contacts.find(
  //           contact => contact.name.toLowerCase() === data.name.toLowerCase()
  //         )
  //       ) {
  //         alert(`${data.name} is alredy in contacts`);
  //       } else {
  //         return {
  //           contacts: [
  //             { id: nanoid(), name: data.name, number: data.number },
  //             ...this.state.contacts,
  //           ],
  //         };
  //       }
  //     });
  //   };

  addContact = data => {
    this.setState(() => {
      return {
        contacts: [
          ...this.state.contacts,
          { id: nanoid(), name: data.name, number: data.number },
        ],
      };
    });
  };

  render = () => {
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts}/>
      </>
    );
  };
}


export default App;