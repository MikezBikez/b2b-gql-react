# b2b-gql-react
The Back to Bikes attendance app refactored as a GraphQL / React / Webpack Stack (Still using MongoDB).

# Installation:
1) clone this repo
2) cd ./b2b-gql-react
3) npm install
4) npm run dev (starts the server)
5) Point your browser to http://localhost:3000/graphql for the GraphiQL interface (note no "i" in the URL) OR
6) http://localhost:3000/#/ for the client/user interface

# Check Point 1
The app has similar base functionality as the previous meteor/react/semantic-ui app but thers to away to go before it may be considered feature complete

Server side:
- graphql-express used as the GraphQL server framework
- GraphQL endpoints set up for basic CRUD and checkin 

Client side:
- Currently uses the [materialize](http://materializecss.com/) css framework for styling. Currrently just using defaults which does look a bit ugly
- Code splitting (a bit of an overkill for this app) enabled with react-router v3 and webpack 2. Will refactor to react-router v4 at some point but is not a priority at the moment

To Do:
- Refactor tests for Check Point 1
- log each attendance to an 'attendance' collection to have data to track / report
- Sort the notCheckedIn list to have most recent attendees at the top of the list
- Add intended hours Slider to the ConfirmCheckin component and record in the 'attendance' collection as well
- Add a person search/filter function to the CheckIn and PeopleList components 
- Add an Avatar component and substitute it for any references B2B members in dependent components
- Re-style app to be a little more eye pleasing
- Refactor
