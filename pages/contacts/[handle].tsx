import React from 'react'
import Link from 'next/link'
import BackToContactsLink from '../../components/BackToContactsLink'
import { useContactFromHandle } from '../../hooks'

import { IContact } from '../../models'

const ContactDetails: React.FunctionComponent<{
  contact: IContact
}> = ({ contact }) => {
  return (
    <div>
      <h1>
        {contact.firstName} {contact.lastName}
      </h1>
      <p>{contact.jobTitle}</p>
      <a href={`mailto:${contact.email}`}>{contact.email}</a>
      <p>{contact.address}</p>
      <a href={`tel: ${contact.phoneNumber}`}>{contact.phoneNumber}</a>
    </div>
  )
}

const ContactDetailsPage = () => {
  const contact = useContactFromHandle()

  if (!contact)
    return (
      <div>
        <BackToContactsLink />
        <h1>No contact with that name found</h1>
        <Link href="/add">
          <a className="link">Add new contact</a>
        </Link>
      </div>
    )

  return (
    <div>
      <BackToContactsLink />
      <ContactDetails contact={contact} />
      <Link href={`/edit/${contact.handle}`}>
        <a className="link">Edit contact</a>
      </Link>
    </div>
  )
}

export default ContactDetailsPage
