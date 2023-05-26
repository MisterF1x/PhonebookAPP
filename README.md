# Phonebook App ![ ](https://skillicons.dev/icons?i=react,materialu,redux)

application built using React, Material-UI, and a backend hosted on Heroku. It
leverages various libraries and features such as public and private routes,
Redux Toolkit for state management, and data persistence using Redux Persist.

## Features

- **Public and Private Routes**: The app implements a routing system where
  certain routes require authentication to access. Public routes allow users to
  view the phonebook without authentication, while private routes require users
  to log in to perform actions such as adding, editing, or deleting contacts.

- **Redux Toolkit**: Redux Toolkit is used for efficient state management in the
  app. It provides a simplified way to manage the application state, handle
  actions, and update the UI accordingly. It also offers features like
  immutability, middleware, and the Redux DevTools extension for debugging.

- **Persistence**: Redux Persist is integrated into the app to ensure that the
  user's phonebook data persists across page reloads or app restarts. It stores
  the state in the browser's local storage, allowing the user to continue where
  they left off.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Material-UI: A popular React UI framework that provides pre-designed
  components and styling.
- Redux Toolkit: A Redux library that simplifies state management.
- Redux Persist: A library that enables data persistence for Redux state.
- Heroku: A cloud platform used for hosting the backend of the app.
