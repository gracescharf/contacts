import React from "react"
import ContactForm from "../../components/ContactForm"
import { useContactFromHandle } from "../../hooks"

const EditContact = () => {
  const contact = useContactFromHandle()

  if (!contact) return "No contact found"

  return <ContactForm contact={contact}></ContactForm>
}

export default EditContact
