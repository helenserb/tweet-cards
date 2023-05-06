import css from './ContactList.module.css'
import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from 'service/contactsAPI';
// import { visilbleContacts} from 'redux/selectors';
import { useSelector } from 'react-redux';
import { selectFilter, getIsLoading } from 'redux/selectors';
import Loader from 'components/Loader/Loader';

export const ContactList = () => {
  const [deleteContact] = useDeleteContactMutation();
    const isLoading = useSelector(getIsLoading);
  const filter = useSelector(selectFilter);
  
  const { data = [] } = useFetchContactsQuery();
    const formattedFilter = filter.toLowerCase();
    const filteredContacts = data.filter(contact =>
      contact.name.toLowerCase().includes(formattedFilter)
    );
  
    return (
      <ul className={css.contactList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={css.contactItem} key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => {
                deleteContact({ id });
              }}
            >
              Delete
            </button>
          </li>
        ))}
        {isLoading && <Loader />}
      </ul>
    );
}
