import css from './ContactList.module.css'
import PropTypes, { arrayOf } from 'prop-types'
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = ({ contacts, onDelete }) => {
  const distpach = useDispatch();
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

ContactList.propTypes = {
  contacts: arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};