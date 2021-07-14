import { IContact } from '../../models'

export const addContactRequest = (contact: IContact) => {
  return fetch('/api/add-contact', {
    method: 'POST',
    body: JSON.stringify(contact),
  })
    .then((r) => r.json())
    .then((r: IContact[]) => r)
}

export const editContactRequest = ({
  newContact,
  oldHandle,
}: {
  newContact: IContact
  oldHandle: string
}) => {
  return fetch('/api/edit-contact', {
    method: 'POST',
    body: JSON.stringify({ newContact, oldHandle }),
  })
    .then((r) => r.json())
    .then((r: IContact[]) => r)
}

export const deleteContactRequest = (handle: string) => {
  return fetch(`/api/delete-contact/${handle}`)
    .then((r) => r.json())
    .then((r: IContact[]) => r)
}
