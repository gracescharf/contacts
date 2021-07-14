import { NextApiRequest, NextApiResponse } from 'next'
import { contacts } from '../../__mocks__/contacts'

const editContact = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { body } = req
    const { newContact, oldHandle } = JSON.parse(body)

    const oldContactIndex = contacts.findIndex((c) => c.handle === oldHandle)
    const copiedContacts = [...contacts]
    copiedContacts.splice(oldContactIndex, 1)

    res.status(200).json([...copiedContacts, newContact])
  } else {
    res.status(404).json(contacts)
  }
}

export default editContact
