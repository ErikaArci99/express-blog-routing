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
    res.send('Creazione nuovo post');
  });

//  update
app.put('/:id', (req, res) => {
    res.send('Modifica integrale del post' + req.params.id);
  });

// modify
app.patch('/:id', (req, res) => {
    res.send('Modifca parziale del post' + req.params.id);
  });

// destroy
app.delete('/:id', (req, res) => {
    res.send('Eliminazione del post' + req.params.id);
  });

//  esporto le rotte in app.js
module.exports = router;