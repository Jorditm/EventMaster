const express = require ('express');
const router = express.Router();
const axios = require ('axios');
require ('dotenv').config();

router.get('/events', (req, res, next) => {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events?sort=name,date,asc&size=30&apikey=${process.env.CONSUMER_KEY}`)
    .then(response=>{
        const eventArray=response.data['_embedded'].events
        console.log(eventArray)
        res.render("event-search-result", {events: eventArray});
    })
    .catch(error=>console.log(error))
    
    
  });


module.exports= router;