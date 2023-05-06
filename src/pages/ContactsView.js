import { Form } from '../components/Form/Form';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList'
import { useSelector } from 'react-redux';
import Loader from '../components/Loader/Loader';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { getIsLoading } from 'redux/selectors';


export default function ContactsView() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(getIsLoading);

  return (
    <>
      {isLoggedIn ? (
        <div>
          <h1>Phonebook</h1>
          <Form />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
          {isLoading && <Loader />}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
