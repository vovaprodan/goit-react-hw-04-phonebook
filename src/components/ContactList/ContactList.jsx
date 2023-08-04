import PropTypes from 'prop-types';
import React from "react";
import css from './ContactList.module.css'

export const ContactList = ({ data, onDeleteConcat }) => {

    return <ul className={css.list}>
          {
            data.map(contact => {
             return <li className={css.item} key={contact.id}>
                <p>{contact.name}:</p>
               <p>{contact.password}</p>
               <button className={css.button} type="button" onClick={() => onDeleteConcat(contact.id)}>Delete</button>
              </li>
            })
}
        </ul>
}

ContactList.propTypes = {
  data: PropTypes.array,
  onDeleteConcat: PropTypes.func
}