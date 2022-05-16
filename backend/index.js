 const express = require('express');
 const app = express()
 const axios = require('axios');
 require("dotenv").config();

 const port = 8080

let data

 const getUser = async () =>{
    const config = {
        method: 'GET',
        url: `https://api.nasa.gov/planetary/apod`,
        params: {
            api_key: process.env.NASA_API_KEY,
        }
    }
     try {
        const res = await axios (config)
        data = res.data
        console.log(data);
     } catch (error) {
         console.log(error);
     }
     
 }

 getUser()



 app.get('/', (req, res) =>{

     res.json( data )
 })

 app.listen(port, () =>{
     console.log(`Server listening on ${port}`);
 })
