import { useRouter } from 'next/dist/client/router'
import { createContext, useContext, useState } from 'react'
import { IContact } from '../models'

interface IContactsContext {
  contacts: IContact[]
  setContacts: (contacts: IContact[]) => void
}

export const ContactsContext = createContext<IContactsContext>({
  contacts: [],
  setContacts: () => {},
})

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
  const { contacts } = useContactsContext()

  if (!handle || !contacts.length) return undefined

  return contacts.find((contact) => handle === contact.handle)
}
