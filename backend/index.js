 const express = require('express');
 const app = express()
 const cors = require('cors');
 const axios = require('axios');
 const port = 8080



 /* Variable to hold the response from the api call */
 let data


app.use(cors())


/* Function to trigger the api call using axios and ES6 syntax async and await*/
 const getUser = async () =>{


    /* config for axios request. This config will allow me to determine the method and other things like adding an api key if one is available */
    const config = {
        method : 'GET',
        url : 'http://www.boredapi.com/api/activity/'

    }
 
     try {
        const res = await axios.request(config)
        data = res.data
        console.log(data);
     } catch (error) {
         console.log(error);
     }
        /* set function to be invoked after every half a second */
     setTimeout(getUser, 500)
     
 }

 getUser()


/* Sending data to the path of / */
 app.get('/', (req, res) =>{

     res.json( data )
 })



 /* making sure the server is running and on what port */
 app.listen(port, () =>{
     console.log(`Server listening on ${port}`);
 })

