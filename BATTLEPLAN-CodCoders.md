### BATTLEPLAN - Codaisseur Coders

## Homepage

# Display a list of posts by developers

1. [x] Install Axios: - npm i axios
2. [x] Install React-Router: - npm i react-router-dom
3. [x] Make a page-component to render the postlist (Homepage.js)
4. [x] Add routes and import page-component
5. [x] Create a new folder in the store:

   - [x] Create slice.js
   - [x] Create thunk.js
   - [x] Create selectors.js
   - [x] Add new slice(sub) in the store(main)

6. [] Slice-file:

   - [x] Create intialState
   - [x] Add loading-case and export
   - [x] Add a new case
   - [x] console.log("Something: ", action)
   - [x] Export action
   - [] Write logic

7. [] Thunk-file:

   - [x] Import axios
   - [x] Import (../../config/constant) API-URL (when it's the first thunk)
   - [] Make http GET request with thunk (skeleton)
   - [] Import axtion from slice
   - [] Dispatch the action

8. [] Selectors-file

   - [] Write a selector function

9. [] Component-file:

   - [] Import useDispatch and define a const
   - [] Import useSelector, define a const and select data
   - [] Import useEffect
   - [] Call the function _dispatch(thunk())_ in useEffect
   - [] Return list with .map (and pass down props in new component)

# Posts should be ordered by newest to oldest

# We should only see 5 posts first

# A “load more” button is placed at the bottom of the screen,

# Clicking it shows another 5 posts

# By clicking on a post, the user should navigate to the Details Page

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
