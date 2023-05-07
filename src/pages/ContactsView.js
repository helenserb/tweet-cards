import { Form } from '../components/Form/Form';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';



export default function ContactsView() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const styles = {
    conteiner: {
      marginLeft: 20,
    },
  };
return (
    <div style = {styles.conteiner}>
      {isLoggedIn ? (
        <div>
          <h1>Phonebook</h1>
          <Form />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
