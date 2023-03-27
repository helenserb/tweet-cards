import css from './ContactList.module.css'
import PropTypes, { arrayOf } from 'prop-types'

export const ContactList = ({ contacts, onDelete }) => {
    return (
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li className={css.contactItem}
            key={id}>
            <p>{name}: {number}
            </p>
            <button type="button" onClick={() => {onDelete(id);}}>
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