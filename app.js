const express = require('express');

// inizializziamo express in app
const app = express();

// definiamo la porta 
const port = 3000;

// serve file statici dalla cartella "public"
app.use(express.static('public'));

// definiamo la rotta base 
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

// rotta bacheca
app.get('/bacheca', (req, res) => {
    const post = [
        {
            title: "Ciambellone",
            content: "Sofficissima torta con buco in mezzo",
            img: "<img src='/imgs/ciambellone.jpeg'>",
            tags: ["Ciambella", "Soffice", "Dolce"],
        },
        {
            title: "Cracker Barbabietola",
            content: "Non molto bella ma sicuramente buona",
            img: "<img src='/imgs/cracker_barbabietola.jpeg'>",
            tags: ["cracker", "barbabietola", "rosa"],
        },
        {
            title: "Pane fritto dolce",
            content: "Buonissimo pane fritto ricoperto di zucchero",
            img: "<img src='/imgs/pane_fritto_dolce.jpeg'>",
            tags: ["pane", "fritto", "Dolce"],
        },
        {
            title: "Pasta barbabietola",
            content: "Gustosissima pasta rosa",
            img: "<img src='/imgs/pasta_barbabietola.jpeg'>",
            tags: ["barbabietola", "pasta", "rosa"],
        },
        {
            title: "Torta paesana",
            content: "Tipico dolce Lombardo",
            img: "<img src='/imgs/torta_paesana.jpeg'>",
            tags: ["torta", "paesana", "lombardia"],
        },
    ];
    res.json(post);
});

// inseriamo il metodo che lascia in ascolto il server
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`);
});