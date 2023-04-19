import { useState } from "react";
import { nanoid } from 'nanoid'
import css from './Form.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';


export const Form = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const  numberInputId = nanoid();

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
  const isExist = contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isExist) {
        alert(`${name} is alredy in contacts`);
        return;
      } 
    dispatch(addContact({ name, number }));
    reset();
  };

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId} className={css.formLabel}>
          Name:
        </label>
        <input
          className={css.formInput}
          id={nameInputId}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />

        <label htmlFor={numberInputId} className={css.formLabel}>
          Number:
        </label>
        <input
          className={css.formInput}
          id={numberInputId}
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
