import css from './ContactList.module.css'
import { deleteContact } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch } from 'react-redux';


export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLowerCase();
  const visilbleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
  );
  const distpach = useDispatch();
  
    return (
      <ul className={css.contactList}>
        {visilbleContacts.map(({ id, name, number }) => (
          <li className={css.contactItem} key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => {
                distpach(deleteContact(id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
}
