import { Form } from '../components/Form/Form';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList'
import { useSelector } from 'react-redux';
import Loader from '../components/Loader/Loader';


export default function ContactsView() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <div>
          <h1>Phonebook</h1>
          <Form />
          <h2>Contacts</h2>
          <Filter />
          {contacts && <ContactList />}
          {isLoading && <Loader />}
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
