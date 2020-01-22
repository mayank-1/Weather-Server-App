# Weather Server App

This is the Server App using `Node.js + Express.js`. This is the second part or the backend of this [App](http://weather-client-app.herokuapp.com/) which send request to this `server` app in the backend. And this server app call a `Weather API` internally to fullfill requests coming from the `client` app.

This Server handles `TWO API` Requests:
- Accepts Single `ZIP CODE` in `GET` request and returns the weather data using Route: `/:zipcode?`
- Accepts Bulk `ZIP CODE` in `POST` request and returns the weather data for the all the zipcodes using Route: `/bulk`.         Example for this is `localhost:9000/bulk?zips=10001&zips=390013,in&zips=77001` using `POSTMAN` send a `POST` request with multiple value and same key to get the `JSON` response

To run the app, follow this:
- Clone The Repository
- Run `npm install` to install the project dependencies i.e `node_modules`
- Run `node server.js` or `nodemon` to run the server on `localhost:9000`

