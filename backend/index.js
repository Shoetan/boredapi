 const express = require('express');
 const app = express()
 const cors = require('cors');
 const axios = require('axios');
 const port = 8080

 let data


app.use(cors())

 const getUser = async () =>{

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

     setTimeout(getUser, 500)
     
 }

 getUser()



 app.get('/', (req, res) =>{

     res.json( data )
 })

 app.listen(port, () =>{
     console.log(`Server listening on ${port}`);
 })

