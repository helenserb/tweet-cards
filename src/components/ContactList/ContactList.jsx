import css from './ContactList.module.css'
import { deleteContact } from 'redux/operations';
import { visilbleContacts} from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const distpach = useDispatch();
  const contacts = useSelector(visilbleContacts);

    return (
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => (
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
