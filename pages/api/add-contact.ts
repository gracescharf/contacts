import { NextApiRequest, NextApiResponse } from 'next'
import { contacts } from '../../__mocks__/contacts'

const addContact = (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req
  res.status(200).json([...contacts, JSON.parse(body)])
}

export default addContact
