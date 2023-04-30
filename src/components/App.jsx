import { Form } from "./Form/Form";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Loader from "./Loader/Loader";
import { fetchContacts } from 'redux/operations';
import { isLoadingSelector, contactsSelector } from 'redux/selectors';



export default function App() {
  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);

  useEffect(()=> {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      {contacts && <ContactList />}
      {isLoading && <Loader />}
    </>
  );
  }