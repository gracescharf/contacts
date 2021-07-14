import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useReducer, useState } from 'react'
import { useContactsContext } from '../../hooks'
import { IContact } from '../../models'
import { handleize } from '../../utils'
import {
  FormActions,
  FormType,
  initialFormState,
  onInputChange,
  reducer,
} from './state'
import {
  addContactRequest,
  deleteContactRequest,
  editContactRequest,
} from './service'

import styles from './contact-form.module.css'

const ContactForm: React.FunctionComponent<{
  contact?: IContact
}> = ({ contact }) => {
  const [formState, dispatch] = useReducer(reducer, initialFormState)
  const [formType, setFormType] = useState(FormType.ADD)

  const { contacts, setContacts } = useContactsContext()
  const router = useRouter()

  useEffect(() => {
    if (!contact) return

    setFormType(FormType.EDIT)

    dispatch({
      type: FormActions.UPDATE_FORM,
      payload: {
        newState: contact,
      },
    })
  }, [contact])

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const handle = handleize(`${formState.firstName} ${formState.lastName}`)
    const newContact = {
      ...formState,
      handle,
    }

    const updatedContacts =
      contact && formType === FormType.EDIT
        ? await editContactRequest({ newContact, oldHandle: contact.handle })
        : await addContactRequest(newContact)
    setContacts(updatedContacts)

    router.push(`/contacts/${handle}`)
  }

  const deleteContact = async () => {
    if (
      contact &&
      window.confirm(
        `Are you sure you want to delete ${contact.firstName} ${contact.lastName} from your contacts?`
      )
    ) {
      const updatedContacts = await deleteContactRequest(contact.handle)

      setContacts(updatedContacts)
      router.push('/')
    } else return null
  }

  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <label htmlFor="first-name">First Name</label>
      <input
        id="firstName"
        value={formState.firstName}
        type="text"
        required
        onChange={(e) =>
          onInputChange(e, FormActions.UPDATE_FIRST_NAME, dispatch)
        }
      />

      <label htmlFor="last-name">Last Name</label>
      <input
        id="lastName"
        value={formState.lastName}
        type="text"
        required
        onChange={(e) =>
          onInputChange(e, FormActions.UPDATE_FIRST_NAME, dispatch)
        }
      />

      <label htmlFor="job-title">Job Title</label>
      <input
        id="jobTitle"
        value={formState.jobTitle}
        type="text"
        required
        onChange={(e) =>
          onInputChange(e, FormActions.UPDATE_FIRST_NAME, dispatch)
        }
      />

      <label htmlFor="address">Address</label>
      <input
        id="address"
        value={formState.address}
        type="text"
        required
        onChange={(e) =>
          onInputChange(e, FormActions.UPDATE_FIRST_NAME, dispatch)
        }
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={formState.email}
        type="email"
        required
        onChange={(e) =>
          onInputChange(e, FormActions.UPDATE_FIRST_NAME, dispatch)
        }
      />
      <div>
        <button type="submit" className="link">
          Save
        </button>
        {formType === FormType.EDIT && (
          <button className="link delete" type="button" onClick={deleteContact}>
            Delete contact
          </button>
        )}
      </div>
    </form>
  )
}

export default ContactForm
