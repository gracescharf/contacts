This is a simple app to view, add, edit, and delete contacts.
It is built in Next.js, using Typescript, CSS Modules, Jest and React Testing Library, and deployed by Vercel.

## Getting Started

To view the app in action, you can visit [https://contacts-app-eight.vercel.app/](https://contacts-app-eight.vercel.app/)

To view the app locally, clone the repo, run `npm i` and then `npm run dev`. The app will be running at [http://localhost:3000](http://localhost:3000)

## APIs

The mock REST APIs on this project make use of [Next.js's API routes.](https://nextjs.org/docs/api-routes/introduction)

Each API returns an array of contact objects
**Example response**

     [
      {
        firstName:  'Isaac',
        lastName:  'Brock',
        jobTitle:  'Singer and guitarist',
        address: '1219   SW Park Ave, Portland, OR 97205',
        email:  'isaac.brock@modestmouse.com',
        handle:  'isaac-brock',
      },
    ]

---

**Get Contacts**
Always sends back an array of the same 3 contacts

**URL** `/api/get-contacts`
**Method** `get`
**Returns** An array of contact objects
**Example usage**

    fetch('/api/get-contacts')
    .then((r) =>  r.json())
    .then((data) =>  data)

---

**Add Contact**
Takes a new contact object and returns the mock contact data array plus the new contact. Because there isn't an actual database set up, only one new contact can be added. Adding another new contact will result in the loss of the previous new contact

**URL** `/api/add-contact`
**Method** `post`
**Accepts** A contact object
**Returns** An array of contact objects, including new contact
**Example usage**

    fetch('/api/add-contact', {
      method:  'POST',
      body:  JSON.stringify(contact),
    })
    .then((r) =>  r.json())
    .then((r) =>  r)

---

**Edit**
Edit the content of a single contact

**URL** `/api/edit-contact`
**Method** `post`
**Accepts** An object containing two properties: the new version of the contact object and the old version's handle
**Returns** An array of contact objects with only the new version of the edited contact
**Example usage**

    fetch('/api/edit-contact', {
      method:  'POST',
      body: JSON.stringify({ newContact, oldHandle }),
    })
    .then((r) =>  r.json())
    .then((r) =>  r)

---

**Delete Contact**
Similar to `add-contact`, only one contact at a time can be deleted

**URL** `/api/delete-contact`
**Method** `get``
**Accepts** The handle of the contact to delete
**Returns** An array of contact objects minus the contact with the matched handle
**Example usage**

    fetch(`/api/delete-contact/${handle}`)
    .then((r) =>  r.json())
    .then((r) =>  r)

## Why Next.Js?

- Make use of its built-in backend-for-frontend for mocked API requests
- Comes with a good set up (CSS Modules, Typescript, routing)
- Remote deployment
- Wanted to play around / explore Next.Js a bit more :)

## Considerations

- Contact details are in a separate page rather than a modal not only because modals are annoying to code & to experience, but because it's better for accessibility compliance. And I like that you can look up a contact's details by going to `/contacts/${firstName-lastName}`
- The source of truth comes from the API and gets added to Context. I initially didn't have add/edit/delete APIs, and was just adding/editing/deleting directly to/from Context, which had the benefit of being able to add and delete as many contacts as you want. But ultimately I felt like this way is better to demonstrate how it would actually work if I were querying database

## Up Next

- Better error handling, especially for the APIs (eg, if the handle passed to `delete-contact` doesn't match anything)
- Full test coverage
- Handle the case of two contacts with the same name - this will mess up the handle which I'm currently using as an ID. Would probably solve this by just adding a unique ID to each contact
- Add loading states between transitions
- Add full address fields with autocomplete / validation
- Add image to contact
