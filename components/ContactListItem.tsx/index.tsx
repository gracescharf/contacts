import React from "react"
import Link from "next/link"
import { IContact } from "../../models"

const ContactListItem: React.FunctionComponent<Partial<IContact>> = ({
  firstName,
  lastName,
  handle,
}) => {
  return (
    <li>
      <h2>
        <Link href={`contacts/${handle}`}>
          <a>
            {firstName} {lastName}
          </a>
        </Link>
      </h2>
    </li>
  )
}

export default ContactListItem
