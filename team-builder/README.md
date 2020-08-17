1. ### Task 2a: Minimum Viable Product

  ## 1. Create members data
  ## 2. Import data, convert to state, .map state to create initial members
  ## 3. Create form for name, email, and role (use form, label, and input)

  - [ ] Render a list of team members from state.
  - [ ] Build a form to add a new member to the list of members.

2. #### Setup your state

  ## 4. Create state for new members 
  ## 5. Create on change event, then handler to handle event.

  - [ ] Import the `useState` hook and set up state to keep your team members list.
  - [ ] Give the state variable you just declared a default value. You will need to keep track of a list of team members and each team member will have several key/value pairs associated with them.
  - [ ] Render your list of team members.

3. #### Build your form

  ## 6. Create add new member function 
    Pass to MemberForm as prop in MemberForm component
    Create submit form function that uses new addNewMember function
    Create submit type button
    Change values of state in inputs to reflect changes made by submit
  ## 7. Add secondary input content + logic
  ## 8. Refactor handle changes
  ## 9. Clear form logic

  - [ ] In `Form.js` build out your markup.
  - [ ] Build inputs for `name`, `email` and `role` (backend engineer, frontend engineer, designer, etc. Use your imagination).
  - [ ] You will have to decide which component is responsible for maintaining the _state_ of the form (`Form` itself, or its parent `App`). Each approach has advantages and disadvantages.
  - [ ] Render your `Form` component in `App`. The `App` component should hand down through props any callback(s) needed for `Form` to do its job (adding new members to your team members state on submit).


















































This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
