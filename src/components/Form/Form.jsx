import { useState } from "react";
import css from './Form.module.css'

import {
  useFetchContactsQuery,
  useAddContactMutation,
} from 'service/contactsAPI';


export const Form = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('');

 const [addContact] = useAddContactMutation();

 const { data = [] } = useFetchContactsQuery();

const handleChange = ({target: {name, value}}) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('This field does not exist');
            break;
    }

  };

const reset = () => {
  setName('');
  setNumber('');
  };

    const handleSubmit = e => {
      e.preventDefault();
      const formattedName = name.toLowerCase();
      const isNewContact = data.every(
        contact => contact.name.toLowerCase() !== formattedName
      );

      if (!isNewContact) {
        alert(`${name} is already in contacts.`);
        return;
      }
      addContact({ name, number });

      reset();
    };


  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor={name} className={css.formLabel}>
          Name:
        </label>
        <input
          className={css.formInput}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />

        <label htmlFor={number} className={css.formLabel}>
          Number:
        </label>
        <input
          className={css.formInput}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />

        <button className={css.submitBtn} type="submit">Add contact</button>
      </form>
    );
  };
