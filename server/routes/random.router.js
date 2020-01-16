const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

getRandomNumber = () => {
    let random = (Math.floor(Math.random() * 75) + 1);
    console.log(random);
    return random;
}

router
  .get("/", (req, res) => {
    let endpoint = `https://pixabay.com/api/?key=${process.env.API_KEY}&q=dogs&page=${getRandomNumber()}&per_page-5`;
    axios
      .get(endpoint, {headers: {Authorization: process.env.API_KEY}})
      .then(response => {       
        res.send(response.data.hits);        
      })
      .catch(error => {
        console.log("Error in Axios GET:", error);
      });
  })

module.exports = router;