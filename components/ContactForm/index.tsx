import { useRouter } from "next/dist/client/router"
import React, { useEffect, useReducer, useState } from "react"
import { useContactsContext } from "../../hooks"
import { IContact } from "../../models"
import { handleize } from "../../utils"
import {
  FormActions,
  FormType,
  initialFormState,
  onInputChange,
  reducer,
} from "./state"

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

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const handle = handleize(`${formState.firstName} ${formState.lastName}`)
    const newContact = {
      ...formState,
      handle,
    }

    if (formType === FormType.EDIT && contact) {
      const oldContactIndex = contacts.findIndex(
        (c) => c.handle === contact.handle
      )
      const copiedContacts = [...contacts]
      copiedContacts.splice(oldContactIndex, 1)
      console.log("copied", copiedContacts)
      setContacts([...copiedContacts, newContact])
    } else {
      setContacts([...contacts, newContact])
    }

    router.push(`/contacts/${handle}`)
  }

  const deleteContact = () => {
    if (
      contact &&
      window.confirm(
        `Are you sure you want to delete ${contact.firstName} ${contact.lastName} from your contacts?`
      )
    ) {
      const copiedContacts = [...contacts]

      const oldContactIndex = contacts.findIndex(
        (c) => c.handle === contact.handle
      )
      copiedContacts.splice(oldContactIndex, 1)

      setContacts([...copiedContacts])
      router.push("/")
    } else return null
  }

  return (
    <form onSubmit={onFormSubmit}>
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

      <button type="submit">{formType}</button>
      {formType === FormType.EDIT && (
        <button type="button" onClick={deleteContact}>
          Delete contact
        </button>
      )}
    </form>
  )
}

export default ContactForm
