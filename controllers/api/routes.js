const express = require("express");
const axios = require("axios").default;
const { parse, stringify } = require("flatted/cjs");
const util = require("util");
const weatherServer = express.Router();

//Fetch Weather Details according to ZIP CODE
weatherServer.get("/:zipcode?", (req, res) => {
  let zip = req.params.zipcode;

  if (zip) {
    //Call the Weather api
    axios
      .get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          zip: zip,
          appid: "db6d7d2de085a66b782671c3f9206b81"
        }
      })
      .then(data => {
        res.send(data.data);
      })
      .catch(err => {
        res.send("INVALID");
      });
  } else {
    res.send("Welcome To Weather App - WebService");
  }
});

weatherServer.post("/bulk", (req, res) => {
  const zipArray = req.query.zips;
  let zipdata = [];
  let responseResult = [];
  zipArray.map(item => {
    if (item) {
      zipdata.push(
        axios
          .get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
              zip: item,
              appid: "db6d7d2de085a66b782671c3f9206b81"
            }
          })
          .then(data => {
            return data;
          })
          .catch(err => {
            res.send("INVALID");
          })
      );
    }
  });
  Promise.all(zipdata).then(result => {
    result.map(item => {
      responseResult.push(item.data);
    });
    res.send(util.inspect(responseResult));
  });
});

module.exports = weatherServer;
