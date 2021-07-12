import React, { useReducer } from "react"

interface IContactForm {
  firstName: string
  lastName: string
  jobTitle: string
  address: string
  email: string
}

enum FormActions {
  UPDATE_FIRST_NAME = "update first name",
  UPDATE_LAST_NAME = "update last name",
  UPDATE_JOB_TITLE = "update job title",
  UPDATE_ADDRESS = "update address",
  UPDATE_EMAIL = "update email",
}

interface IAction {
  type: FormActions
  payload: {
    value: string
    inputId: keyof IContactForm
  }
}

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
}

const reducer = (state: IContactForm, action: IAction): IContactForm => {
  return {
    ...state,
    [action.payload.inputId]: action.payload.value,
  }
}

const initialFormState: IContactForm = {
  firstName: "",
  lastName: "",
  jobTitle: "",
  address: "",
  email: "",
}

const ContactForm = () => {
  const [formState, dispatch] = useReducer(reducer, initialFormState)
  const onInputChange = (
    e: React.FormEvent<HTMLInputElement>,
    actionType: FormActions
  ) => {
    const target = e.target as HTMLInputElement
    dispatch({
      type: actionType,
      payload: {
        value: target.value,
        inputId: target.id as keyof IContactForm,
      },
    })
  }
  return (
    <form>
      <label htmlFor="first-name">First Name</label>
      <input
        id="firstName"
        type="text"
        required
        onChange={(e) => onInputChange(e, FormActions.UPDATE_FIRST_NAME)}
      />

      <label htmlFor="last-name">Last Name</label>
      <input
        id="lastName"
        type="text"
        required
        onChange={(e) => onInputChange(e, FormActions.UPDATE_FIRST_NAME)}
      />

      <label htmlFor="job-title">Job Title</label>
      <input
        id="jobTitle"
        type="text"
        required
        onChange={(e) => onInputChange(e, FormActions.UPDATE_FIRST_NAME)}
      />

      <label htmlFor="address">Address</label>
      <input
        id="address"
        type="text"
        required
        onChange={(e) => onInputChange(e, FormActions.UPDATE_FIRST_NAME)}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        required
        onChange={(e) => onInputChange(e, FormActions.UPDATE_FIRST_NAME)}
      />

      <button type="submit">Add Contact</button>
    </form>
  )
}

export default ContactForm
