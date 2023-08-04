import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { Filter } from "./Filter/Filter";
import { ContactList } from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm'
import css from './App.module.css'

class App extends Component {

  nameinputid = nanoid();
  numberinputis = nanoid();

  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }
  changeFilter = e => {
this.setState({filter: e.currentTarget.value})
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const login = form.elements.name.value;
    const password = form.elements.number.value;
    const contact = { name: login, password: password, id: nanoid() }
    form.reset();
   this.state.contacts.find(contact => contact.name === login)
      ? alert(`${login} is already in contacts`)
      : this.setState(prevState => ({ contacts: [contact, ...prevState.contacts], }));
  }
  onClickButton = id => {
     this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
        this.setState({contacts: parsedContacts })
    }
  
}

  componentDidUpdate(prevProps, prevState,) {
  
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
}

   render() {
    const { filter} = this.state;
    const normalisFilter = this.state.filter.toLowerCase();
    const filterContacts = this.state.contacts.filter(
      contact => contact.name.toLowerCase().includes(normalisFilter)
     )
    return (
    
      <div className={css.div}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit= {this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
        <ContactList data={filterContacts} onDeleteConcat={this.onClickButton} />
      </div>
    );
  }
}
export default App;