import React, { useState , useEffect} from "react";
import { nanoid } from 'nanoid';
import { Filter } from "./Filter/Filter";
import { ContactList } from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm'
import css from './App.module.css'

const App = () => {
  const [contacts, setContacts] = useState(() => { return JSON.parse(localStorage.getItem('contacts')) ?? [] });
  const [filter, setFilter] = useState('');
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const nameinputid = nanoid();
  // const numberinputis = nanoid();

  const changeFilter = e => {
    setFilter(e.currentTarget.value)
    // this.setState({filter: e.currentTarget.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const login = form.elements.name.value;
    const password = form.elements.number.value;
    const contact = { name: login, password: password, id: nanoid() }
    form.reset();
    contacts.find(contact => contact.name === login)
      ? alert(`${login} is already in contacts`)
      : setContacts([contact, ...contacts],)
   
  }
  const onClickButton = id => {
    setContacts(contacts.filter(contact => contact.id !== id))
     
  }
  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
    
  //   if (parsedContacts) {
  //         setContacts(parsedContacts)
  //     }
  // }, []);

useEffect(() => {
    if (contacts) {
         localStorage.setItem('contacts', JSON.stringify(contacts))
    }
  
  }, [contacts]);
  

  const normalisFilter = filter.toLowerCase();
  const filterContacts = contacts.filter(
    contact => contact.name.toLowerCase().includes(normalisFilter)
  )
  return (
    
    <div className={css.div}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList data={filterContacts} onDeleteConcat={onClickButton} />
    </div>
  );
  
}
export default App;