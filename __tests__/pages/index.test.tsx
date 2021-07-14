import React from 'react'
import Contacts from '../../pages/index'
import { render, screen, waitFor, act } from '@testing-library/react'
import { useContactsContext } from '../../hooks'
import { contacts } from '../../__mocks__/contacts'

jest.mock('../../hooks', () => {
  return {
    useContactsContext: jest.fn(() => ({ contacts: [] })),
  }
})

describe('Contacts - top-level component', () => {
  it('should render the contacts heading', () => {
    render(<Contacts />)
    expect(screen.getByText('Your Contacts')).toBeInTheDocument()
  })

  it('should display initial state', () => {
    render(<Contacts />)
    expect(screen.getByText('Make some friends')).toBeInTheDocument()
  })

  it('should contain an enabled add new contact button', () => {
    render(<Contacts />)
    expect(screen.getByText('Add new contact')).toBeEnabled()
  })

  it('should load contacts', () => {
    ;(useContactsContext as jest.Mock).mockReturnValue({ contacts })
    render(<Contacts />)

    expect(screen.getByText('Isaac Brock')).toBeInTheDocument()
  })
})
