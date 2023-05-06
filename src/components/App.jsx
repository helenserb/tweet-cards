import { Route, Routes } from "react-router-dom";
import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Layout } from "./Layout/Layout";

const HomeView = lazy(() => import('../pages/HomeView'));
const RegisterView = lazy(() => import('../pages/RegisterView'));
const LoginView = lazy(() => import('../pages/LoginView'));
const ContactsView = lazy(() => import('../pages/ContactsView'));

export default function App() {
  // const contacts = useSelector(contactsSelector);
  // const dispatch = useDispatch();
  // const isLoading = useSelector(isLoadingSelector);
  // const dispatch = useDispatch();
  // useEffect(()=> {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route exact path="/" component={HomeView}></Route>
        <Route path="/register" component={RegisterView}></Route>
        <Route path="/login" component={LoginView}></Route>
        <Route path="/contacts" component={ContactsView}></Route>
      </Routes>

      {/* <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      {contacts && <ContactList />}
      {isLoading && <Loader />} */}
    </>
  );
  }