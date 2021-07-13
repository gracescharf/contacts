// todo move state stuff into here

export interface IContactForm {
  firstName: string
  lastName: string
  jobTitle: string
  address: string
  email: string
}

export enum FormActions {
  UPDATE_FIRST_NAME = "update first name",
  UPDATE_LAST_NAME = "update last name",
  UPDATE_JOB_TITLE = "update job title",
  UPDATE_ADDRESS = "update address",
  UPDATE_EMAIL = "update email",
  UPDATE_FORM = "update form",
}

export interface IAction {
  type: FormActions
  payload: {
    value?: string
    inputId?: keyof IContactForm
    newState?: IContactForm
  }
}

export const reducer = (state: IContactForm, action: IAction) => {
  if (action.type === FormActions.UPDATE_FORM) {
    return action.payload?.newState || state
  }

  if (!action.payload.inputId || !action.payload.value) {
    return state
  }

  return {
    ...state,
    [action.payload.inputId]: action.payload?.value,
  }
}

export const initialFormState: IContactForm = {
  firstName: "",
  lastName: "",
  jobTitle: "",
  address: "",
  email: "",
}

export enum FormType {
  EDIT = "Edit contact",
  ADD = "Add new contact",
}

export const onInputChange = (
  e: React.FormEvent<HTMLInputElement>,
  actionType: FormActions,
  dispatch: React.Dispatch<IAction>
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
