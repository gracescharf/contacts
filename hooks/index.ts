import { useRouter } from "next/dist/client/router"
import { createContext, useContext, useState } from "react"
import { IContact } from "../models"

interface IContactsContext {
  contacts: IContact[]
  setContacts: (contacts: IContact[]) => void
}

export const ContactsContext = createContext<IContactsContext>({
  contacts: [],
  setContacts: () => {},
})

/**
 * Used to set put the contacts into the ContactsContext & to supply a setter to the context
 */
export const useContactsState = () => {
  const [contacts, setContacts] = useState<IContact[]>([])
  return {
    contacts,
    setContacts,
  }
}

export const useContactsContext = () => useContext(ContactsContext)

/**
 * This only works in files named [handle].tsx
 */
export const useHandle = () => {
  const router = useRouter()
  return router.query?.handle
}

export const useContactFromHandle = () => {
  const router = useRouter()
  const { handle } = router.query

  if (!handle) return undefined

  const { contacts } = useContactsContext()

  if (!contacts.length) return undefined

  return contacts.find((contact) => handle === contact.handle)
}
