import Link from "next/link"
import React from "react"
import { IContact } from "../../models"

const ContactDetails: React.FunctionComponent<{
  contact: IContact
}> = ({ contact }) => {
  return (
    <div>
      <h1>
        {contact.firstName} {contact.lastName}
      </h1>
      <p>{contact.jobTitle}</p>
      <p>{contact.email}</p>
      <p>{contact.address}</p>
    </div>
  )
}

export default ContactDetails
