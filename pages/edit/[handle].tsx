import React from 'react'
import BackToContactsLink from '../../components/BackToContactsLink'
import ContactForm from '../../components/ContactForm'
import { useContactFromHandle } from '../../hooks'

const EditContact = () => {
  const contact = useContactFromHandle()

  if (!contact) return 'No contact found'

  return (
    <main>
      <BackToContactsLink />
      <h1>Edit contact</h1>
      <ContactForm contact={contact}></ContactForm>
    </main>
  )
}

export default EditContact
