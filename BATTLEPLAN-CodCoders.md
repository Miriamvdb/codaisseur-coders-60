### BATTLEPLAN - Codaisseur Coders

## Homepage

# [x] Display a list of posts by developers

1. [x] Install Axios: - npm i axios
2. [x] Install React-Router: - npm i react-router-dom
3. [x] Make a page-component to render the postlist (Homepage.js)
4. [x] Add routes and import page-component
5. [x] Create a new folder in the store:

   - [x] Create slice.js
   - [x] Create thunk.js
   - [x] Create selectors.js
   - [x] Add new slice(sub) in the store(main)

6. [x] slice.js:

   - [x] Create intialState
   - [x] Add loading-case and export
   - [x] Add a new case
   - [x] console.log("Something: ", action)
   - [x] Export action

7. [x] thunk.js:

   - [x] Import axios
   - [x] Import (../../config/constant) API-URL (when it's the first thunk)
   - [x] Make http GET request with thunk (skeleton)
   - [x] Import actions from slice
   - [x] dispatch(startLoading())
   - [x] dispatch(action(response.data))

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
   - [x] Add a new case
   - [x] console.log("Something: ", action)
   - [x] Export action

5. [x] thunk.js:

   - [x] Import axios
   - [x] Import (../../config/constant) API-URL (when it's the first thunk)
   - [x] Make http GET request with thunk (skeleton)
   - [x] Pass a parameter (id)
   - [x] Import actions from slice
   - [x] dispatch(startLoading())
   - [x] dispatch(action(response.data))

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
