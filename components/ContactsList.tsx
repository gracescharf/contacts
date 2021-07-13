import React, { useEffect, useState } from "react"
import { useContactsContext } from "../hooks"
import ContactListItem from "./ContactListItem.tsx"

const ContactsList = () => {
  const { contacts } = useContactsContext()

  if (!contacts.length) return <div>Make some friends</div>

  return (
    <ul>
      {contacts.map((contact) => (
        <ContactListItem
          key={contact.handle}
          firstName={contact.firstName}
          lastName={contact.lastName}
          handle={contact.handle}
        ></ContactListItem>
      ))}
    </ul>
  )
}

export default ContactsList
