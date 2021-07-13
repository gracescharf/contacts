import React from 'react'
import BackToContactsLink from '../components/BackToContactsLink'
import ContactForm from '../components/ContactForm'

const AddNewContact = () => {
  return (
    <main>
      <BackToContactsLink />
      <h1>Add contact</h1>
      <ContactForm />
    </main>
  )
}

export default AddNewContact
