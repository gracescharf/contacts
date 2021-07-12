import React, { useEffect, useState } from "react"
import { useContactsContext } from "../../contexts/contacts.context"
import ContactListItem from "../ContactListItem.tsx"

const ContactsList = () => {
  const { contacts } = useContactsContext()

  if (!contacts.length) return <div>Make some friends</div>

  return (
    <ul>
      {contacts.map((contact) => (
        <ContactListItem
          firstName={contact.firstName}
          lastName={contact.lastName}
          handle={contact.handle}
        ></ContactListItem>
      ))}
    </ul>
  )
}

export default ContactsList
