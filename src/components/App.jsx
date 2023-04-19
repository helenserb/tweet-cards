import { Form } from "./Form/Form";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useSelector } from 'react-redux';
import { getContacts} from 'redux/selectors';

export default function App() {
const contacts = useSelector(getContacts);
    
  return (
      <>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        {contacts && (
          <ContactList />
        )}
      </>
    );
  }