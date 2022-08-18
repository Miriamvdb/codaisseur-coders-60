### BATTLEPLAN - Codaisseur Coders

## Homepage

# [x] Display a list of posts by developers

1. [xx] Install Axios: - npm i axios
2. [xx] Install React-Router: - npm i react-router-dom
3. [xx] Make a page-component to render the postlist (Homepage.js)
4. [xx] Add routes and import page-component
5. [xx] Create a new folder in the store:

   - [xx] Create slice.js
   - [xx] Create thunk.js
   - [xx] Create selectors.js
   - [xx] Add new slice(sub) in the store(main)

6. [xx] slice.js:

   - [xx] Create intialState
   - [xx] Add loading-case and export
   - [xx] Add a new case (empty for now, only console.log)
   - [xx] console.log("Something: ", action)
   - [xx] Export this new empty action

7. [x] thunk.js:

   - [xx] Import axios
   - [xx] Import (../../config/constants) API-URL (when it's the first thunk)
   - [xx] Make http GET request with thunk (skeleton)
   - [xx] Import action(s) from slice
   - [xx] dispatch(startLoading())
   - [xx] dispatch(action(response.data)) (from slice.js)

8. [x] Component-file:

   - [x] Import useDispatch and define a const
   - [x] Import useEffect
   - [x] Import thunk from thunk.js
   - [x] Call the function _dispatch(thunk())_ in useEffect

9. [x] Check console:

   - [x] Check console if the data is there
   - [x] Check console if the action from slice is there

10. [x] slice.js:

    - [x] Write logic
    - [x] Check Redux DevTools if it's there

11. [x] selectors.js:

    - [x] Write a selector function

12. [x] Component-file:

    - [x] Import useSelector, define a const and select data
    - [x] console.log this data to check if the right data is selected
    - [x] Return list with .map (and pass down props in new component)

## Detailspage

# [x] Display posts by id

1. [x] Make a page-component to render the post by id (PostDetailspage.js)
2. [x] Add routes and import page-component
3. [x] Create a new folder in the store:

   - [x] Create slice.js
   - [x] Create thunk.js
   - [x] Create selectors.js
   - [x] Add new slice(sub) in the store(main)

4. [x] slice.js:

   - [x] Create intialState
   - [x] Add loading-case and export
   - [x] Add a new case (empty for now, only console.log)
   - [x] console.log("Something: ", action)
   - [x] Export this new empty action

5. [x] thunk.js:

   - [x] Import axios
   - [x] Import (../../config/constant) API-URL (when it's the first thunk)
   - [x] Make http GET request with thunk (skeleton)
   - [x] Pass a parameter (id)
   - [x] Import actions from slice
   - [x] dispatch(startLoading())
   - [x] dispatch(action(response.data)) (from slice.js)

6. [x] Component-file:

   - [x] Import useParams and define a const to get id from params
   - [x] Import useDispatch and define a const
   - [x] Import useEffect
   - [x] Import thunk from thunk.js
   - [x] Call the function _dispatch(thunk(id))_ in useEffect

7. [x] Check console:

   - [x] Check console if the data is there
   - [x] Check console if the action from slice is there

8. [x] slice.js:

   - [x] Write logic
   - [x] Check Redux DevTools if it's there

9. [x] selectors.js:

   - [x] Write a selector function

10. [x] Component-file:

    - [x] Import useSelector, define a const and select data
    - [x] console.log this data to check if the right data is selected
    - [x] Return the list with objects (check the arrays inside objects) || - [x] .map over the list when it's an array

## Login

# [x] Make a login

1. [x] Install Axios: - npm i axios
2. [x] Install React-Router: - npm i react-router-dom
3. [x] Make a loginpage (Loginpage.js)
4. [x] Add routes and import page-component

5. [] Component-file (Loginpage.js), make a form:

   - [x] Import useState
   - [x] Define const for each field
   - [x] Make function to submit the form (incl event.preventDefault())
   - [x] Also console.log inside this function to see if it's triggered (later)
   - [x] Return:
     ```js
     <form onSubmit={submitLogin}>
        <input
        // etc..
        // etc..
        // etc..
        />
        <input
        // etc..
        // etc..
        // etc..
        />
        <button type="submit">
     </form>
     ```

6. [x] Create a new folder in store: /auth:

   - [x] Create slice.js
   - [x] Create thunk.js
   - [x] Create selectors.js
   - [x] Add new slice(sub) in the store(main)
   - [x] Check Redux DevTools if it's there

7. [x] slice.js:

   - [x] Create intialState
   - [x] Add loading-case and export
   - [x] Add a new case (empty for now, only console.log)
   - [x] console.log("Something: ", action)
   - [x] Export this new empty action

8. [x] thunk.js:

   - [x] Import axios
   - [x] Import (../../config/constants) API-URL (when it's the first thunk)
   - [x] Make http GET request with thunk (skeleton)
   - [x] Import action(s) from slice
   - [x] dispatch(startLoading())
   - [x] dispatch(action(response.data)) (from slice.js)

9. [x] Component-file (Loginpage.js):

   - [x] Import useDispatch and define a const
   - [x] Import thunk (login) from thunk.js
   - [x] Dispatch the thunk in the submitLogin function
     ```js
     dispatch(login(email, password));
     ```

10. [x] Press the login-button, check the console:

    - [x] Check console if the login credentials are there (form Loginpage.js)
    - [x] Check console if the login data is there (thunk.js)
    - [x] Check console if the action is there (slice.js)

11. [] slice.js:

    - [] Write logic to put the received token in the store
    - [x] Remember to switch the state.loading to false
    - [] Check Redux DevTools if it's there

12. [] selectors.js:

    - [] Write a selector function

13. [x] Component-file:

    - [x] Import useSelector, define a const and select data
    - [x] console.log this data to check if the right data is selected
    - [x] Return list with .map (and pass down props in new component)
