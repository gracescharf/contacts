import React from "react"
import ContactForm from "../../components/ContactForm"
import { useContactFromHandle } from "../../hooks"

const EditContact = () => {
  const contact = useContactFromHandle()

  if (!contact) return "No contact found"

  return (
    <main>
      <h1>Edit contact</h1>
      <ContactForm contact={contact}></ContactForm>
    </main>
  )
}

export default EditContact
