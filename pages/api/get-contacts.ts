import { NextApiRequest, NextApiResponse } from 'next'
import { contacts } from '../../__mocks__/contacts'

const getContacts = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(contacts)
}

export default getContacts
