const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

getRandomNumber = () => {
    let random = (Math.floor(Math.random() * 1000) + 1);
    console.log(random);
    return random;
}

router
  .get("/", (req, res) => {
    let endpoint = `https://api.pexels.com/v1/curated?per_page=10&page=${getRandomNumber()}`;
    axios
      .get(endpoint, {headers: {Authorization: process.env.API_KEY}})
      .then(response => {       
        res.send(response.data.photos);
      })
      .catch(error => {
        console.log("Error in Axios GET:", error);
      });
  })

module.exports = router;