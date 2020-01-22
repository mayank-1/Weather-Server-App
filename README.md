# Weather Server App

This is the [Server App](https://weather-server-app.herokuapp.com/) using `Node.js + Express.js`. This is the second part or the backend of this [Client App](http://weather-client-app.herokuapp.com/), which send request to this `server` app in the backend. And this server app call a `Weather API` internally to fullfill requests coming from the `client` app.

This Server handles `TWO API` Requests:
- Accepts Single `ZIP CODE` in `GET` request and returns the weather data using Route: `/:zipcode?`
- Accepts Bulk `ZIP CODE` in `POST` request and returns the weather data for the all the zipcodes using Route: `/bulk`.         Example for this is `localhost:9000/bulk?zips=10001&zips=390013,in&zips=77001` using `POSTMAN` send a `POST` request with multiple value and same key to get the `JSON` response

By default it will accept zipcodes for `US` only. If you want to find weather of your location, then call like this:
- `https://weather-server-app.herokuapp.com/390001,in` or in local `localhost:9000/390001,in` here value is `zipcode,counntrycode`.  
  
 
To run the app, follow this:
- Clone The Repository
- Run `npm install` to install the project dependencies i.e `node_modules`
- Run `node server.js` or `nodemon` to run the server on `localhost:9000`

### Don't Forget to give a `STAR` if you like this project. It motivates me a lot.
