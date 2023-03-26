import { Component } from "react";
import { Container } from "./Container/Container";
import Form from "./Form/Form";

class App extends Component {
  state = {
    contacts: [],
    filter: '',
 
  };




  render = () => {
    return (
   <Container>
        <h1>Phonebook</h1>
          <Form/>
          <h2>Contacts</h2>
          <ul></ul>
   </Container>
    );
  };
}


export default App;