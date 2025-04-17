const express = require('express');
const router = express.Router();

// creo le nuove rotte

// index
app.get('/', (req, res) => {
    res.send('Lista dei post');
  });

// show
app.get('/:id', (req, res) => {
    res.send('Dettagli del post' + req.params.id);
  });

// store
app.post('/', (req, res) => {
    res.send('Creazione nuova pizza');
  });





//  esporto le rotte in app.js
module.exports = router;