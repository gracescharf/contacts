import { NextApiRequest, NextApiResponse } from 'next'
import { contacts } from '../../../__mocks__/contacts'

const deleteContact = (req: NextApiRequest, res: NextApiResponse) => {
  const { handle } = req.query
  const contactIndex = contacts.findIndex((c) => c.handle === handle)
  const copiedContacts = [...contacts]
  copiedContacts.splice(contactIndex, 1)

  res.status(200).json(copiedContacts)
}

export default deleteContact
