const express = require('express');
const router = express.Router();

// creo le nuove rotte

// index
router.get('/', (req, res) => {
    res.send('Lista dei post');
  });






//  esporto le rotte in app.js
module.exports = router;