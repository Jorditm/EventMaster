const express = require ('express');
const router = express.Router();
const axios = require ('axios');
require ('dotenv').config();
router.use((req,res,next)=>{
  if(!req.session.currentUser){
    res.redirect('/auth/login')
  }
  else{next()}
})


router.get('/event',(req,res,next)=>{
  res.render('event')
  })

  router.get('/search-event', (req, res, next) => {
    const searchEvent = req.query.search
    axios.get(`https://app.ticketmaster.com/discovery/v2/events?&sort=random&size=30&keyword=${searchEvent}&apikey=${process.env.CONSUMER_KEY}`)
    .then(response=>{
       console.log(response)
     const eventArray=response.data['_embedded'].events
     console.log(eventArray)
     res.render("event-search-result", {events: eventArray});
    })
    .catch(error=>console.log(error))
    
    
  });
    
  router.get('/attractions',(req,res,next)=>{
  res.render('attractions')
  })

  router.get('/search-attractions', (req, res, next) => {
    const searchEvent = req.query.search
    axios.get(`https://app.ticketmaster.com/discovery/v2/attractions?&size=30&keyword=${searchEvent}&apikey=${process.env.CONSUMER_KEY}`)
    .then(response=>{
       console.log(response)
     const attractionArray=response.data['_embedded'].attractions
     console.log(attractionArray)
     res.render("attractions-search-result", {events: attractionArray});
    })
    .catch(error=>console.log(error))
    
    
  });

  router.get('/lugares',(req,res,next)=>{
    res.render('lugares')
    })
  
    router.get('/search-lugares', (req, res, next) => {
      const searchEvent = req.query.search
      axios.get(`https://app.ticketmaster.com/discovery/v2/venues?&sort=random&size=50&keyword=${searchEvent}&apikey=${process.env.CONSUMER_KEY}`)
      .then(response=>{
         console.log(response)
       const lugaresArray=response.data['_embedded'].venues
       console.log(lugaresArray)
       res.render("lugares-search-result", {events: lugaresArray});
      })
      .catch(error=>console.log(error))
      
      
    });


module.exports= router;