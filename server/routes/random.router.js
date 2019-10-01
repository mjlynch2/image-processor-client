const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/', (req, res) => {
    let endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=&rating=PG-13`;
    axios.get(endpoint)
        .then((response) => {
            let gifToSend = {
                description: response.data.data.title,
                path: response.data.data.image_original_url
            }
            res.send(gifToSend);
        }).catch((error) => {
            console.log('Error in Axios GET:', error);
        })
})

module.exports = router;