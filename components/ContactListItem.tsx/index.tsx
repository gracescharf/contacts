import React from "react"
import Link from "next/link"
import { IContact } from "../../models"
import styles from "./contact-list-item.module.css"
const ContactListItem: React.FunctionComponent<Partial<IContact>> = ({
  firstName,
  lastName,
  handle,
}) => {
  return (
    <li>
      <Link href={`contacts/${handle}`}>
        <a className={styles.name}>
          {firstName} {lastName}
        </a>
      </Link>
    </li>
  )
}

export default ContactListItem
