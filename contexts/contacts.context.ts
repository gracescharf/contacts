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

export const useContactsState = () => {
  const [contacts, setContacts] = useState<IContact[]>([])
  return {
    contacts,
    setContacts,
  }
}

export const useContactsContext = () => useContext(ContactsContext)
