import { useRouter } from "next/dist/client/router"
import React from "react"
import ContactDetails from "../../components/ContactDetails.tsx"
import { useContactsContext } from "../../contexts/contacts.context"

const ContactDetailsPage = () => {
  const router = useRouter()
  const { handle } = router.query
  const { contacts } = useContactsContext()

  if (!contacts.length) return null

  const contact = contacts.find((contact) => handle === contact.handle)

  if (!contact) return "no contact with that name found"

  return <ContactDetails contact={contact} />
}

export default ContactDetailsPage
