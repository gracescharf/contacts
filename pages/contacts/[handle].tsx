import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import React from "react"
import ContactDetails from "../../components/ContactDetails.tsx"
import { useContactFromHandle } from "../../hooks"

const ContactDetailsPage = () => {
  const contact = useContactFromHandle()

  if (!contact)
    return (
      <div>
        <p>No contact with that name found</p>
        <Link href="/add">
          <a>Add new contact</a>
        </Link>
      </div>
    )

  return (
    <div>
      <ContactDetails contact={contact} />

      <Link href={`/edit/${contact.handle}`}>
        <a>Edit contact</a>
      </Link>
      <Link href="/">
        <a>Back to contacts</a>
      </Link>
    </div>
  )
}

export default ContactDetailsPage
