import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ContactsContext } from '../hooks'
import { useEffect, useState } from 'react'
import { IContact } from '../models'

const getContacts = () => {
  return fetch('/api/get-contacts')
    .then((r) => r.json())
    .then((data: IContact[]) => data)
}

function MyApp({ Component, pageProps }: AppProps) {
  const [contacts, setContacts] = useState<IContact[]>([])

  useEffect(() => {
    getContacts().then((contactsData) => {
      setContacts(contactsData)
    })
  }, [])

  return (
    <>
      <ContactsContext.Provider value={{ contacts, setContacts }}>
        <Component {...pageProps} />
      </ContactsContext.Provider>
    </>
  )
}
export default MyApp
