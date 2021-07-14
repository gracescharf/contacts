import React from 'react'
import BackToContactsLink from '../components/BackToContactsLink'
import ContactForm from '../components/ContactForm'

const AddNewContact = () => {
  return (
    <div>
      <BackToContactsLink />
      <h1>Add contact</h1>
      <ContactForm />
    </div>
  )
}

export default AddNewContact
