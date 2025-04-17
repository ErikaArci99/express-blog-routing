const express = require('express');
const router = express.Router();

// creo le nuove rotte

// index
router.get('/', (req, res) => {
    res.send('Lista dei post');
  });

// show
router.get('/:id', (req, res) => {
    res.send('Dettagli del post' + req.params.id);
  });






//  esporto le rotte in app.js
module.exports = router;