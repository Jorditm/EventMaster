const express = require('express');
const router = express.Router();
const User = require ('../models/user');

const Favorito = require('../models/favorito'); 

router.use((req,res,next)=>{
    if(!req.session.currentUser){
      res.redirect('/auth/login')
    }
    else{next()}
  })


router.get('/',(req,res,next)=>{
    User.findById(req.session.currentUser._id)
    .populate('favoritos')
    .then(usuario=>res.render('favoritos',{favoritos: usuario.favoritos}))
    .catch(error=> console.log(error))
    
    })

router.post('/',(req,res,next)=>{
    const newFavorite = {
        name: req.body.name,
        url: req.body.url,
        images: req.body.images,
        localDate: req.body.localDate,
    }
    const theFavorito = new Favorito (newFavorite)

    theFavorito.save()
        .then(favoritoCreado=>{
          return User.findByIdAndUpdate(req.session.currentUser._id,{$push:{favoritos: favoritoCreado._id}},{new:true})
        })
        .then(usuarioActualizado=> res.render('event-search-result',{message:"añadido a favoritos"}))
        .catch(error=> console.log(error))
    
})




module.exports = router;