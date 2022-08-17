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

## Details

# [] Display posts by id

1. [x] Make a page-component to render the post by id (PostDetailspage.js)
2. [x] Add routes and import page-component
3. [] Create a new folder in the store:

   - [] Create slice.js
   - [] Create thunk.js
   - [] Create selectors.js
   - [] Add new slice(sub) in the store(main)

4. [] slice.js:

   - [] Create intialState
   - [] Add loading-case and export
   - [] Add a new case
   - [] console.log("Something: ", action)
   - [] Export action

5. [] thunk.js:

   - [] Import axios
   - [] Import (../../config/constant) API-URL (when it's the first thunk)
   - [] Make http GET request with thunk (skeleton)
   - [] Import actions from slice
   - [] dispatch(startLoading())
   - [] dispatch(action(response.data))

6. [] Component-file:

   - [] Import useDispatch and define a const
   - [] Import useEffect
   - [] Import thunk from thunk.js
   - [] Call the function _dispatch(thunk())_ in useEffect

7. [] Check console:

   - [] Check console if the data is there
   - [] Check console if the action from slice is there

8. [] slice.js:

   - [] Write logic
   - [] Check Redux DevTools if it's there

9. [] selectors.js:

   - [] Write a selector function

10. [] Component-file:

    - [] Import useSelector, define a const and select data
    - [] console.log this data to check if the right data is selected
    - [] Return list with .map (and pass down props in new component)

<!--
### Battleplan - Amsterdam GP's

# Feature 3

- [x] Install Axios: - npm i axios
- [x] Install React-Router: - npm i react-router-dom
- [x] Make a page to render the doctorlist (DoctorSchedule.js)
- [x] Add routes
- [x] Make a separate component to render each doctor (DoctorTable.js)
- [x] Import this component (DoctorTable.js)
- [x] Import useState
- [x] Define a local state with useState
- [x] Import axios
- [x] Import useEffect
- [x] Make http GET request with useEffect
- [x] Return doctors with map and pass down props in DoctorTable.js

# Feature 5

- [x] Install Axios: - npm i axios
- [x] Install React-Router: - npm i react-router-dom
- [x] Make a page to render the doctorlist (PatientDatabase.js)
- [x] Add routes
- [x] Make a separate component to render each doctor (PatientCard.js)
- [x] Import this component (PatientCard.js)
- [x] Import useState
- [x] Define a local state with useState
- [x] Import axios
- [x] Import useEffect
- [x] Make http GET request with useEffect
- [x] Return patients with map and pass down props in

# Feature 6

- [x] Make a page to render the patient details (PatientDetails.js)
- [x] Add a route
- [x] Import useState
- [x] Define a local state with useState
- [x] Import axios
- [x] Import useParams and define a variable
- [x] Import useEffect
- [x] Make http GET request with useEffect
- [x] Return patient (it's an object now), and map over an array in an object if necessary -->
