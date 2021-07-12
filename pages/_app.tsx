import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ContactsContext, useContactsState } from "../contexts/contacts.context"
import { useEffect } from "react"
import { IContact } from "../models"

const getContacts = () => {
  return fetch("/api/get-contacts")
    .then((r) => r.json())
    .then((data: IContact[]) => data)
}

function MyApp({ Component, pageProps }: AppProps) {
  const contactsState = useContactsState()

  useEffect(() => {
    getContacts().then((contactsData) => {
      contactsState.setContacts(contactsData)
    })
  }, [])

  return (
    <>
      <ContactsContext.Provider value={contactsState}>
        <Component {...pageProps} />
      </ContactsContext.Provider>
    </>
  )
}
export default MyApp
