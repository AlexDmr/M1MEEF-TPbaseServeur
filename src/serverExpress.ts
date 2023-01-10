import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use( express.static("./data") );

app.use( bodyParser.json() )
app.use( bodyParser.text() )
app.use( bodyParser.urlencoded() );

const port = 8081;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/add', (req, res) => {
    const body = req.body;
    if (typeof body.a == 'number' && typeof body.b == 'number') {
        res.send(`${body.a} + ${body.b} = ${body.a + body.b}`)
    } else {
        res.status(400).send("Il faut transmettre en urlencoded ou json deux nombre a et b");
    }
});

app.post('/', (req, res) => {
    const b = req.body;
    switch (typeof b) {
        case 'string': 
            res.send(`On nous a transmis le texte "${b}"`);
            break;
        case 'object':
            res.send(`On nous a transmis un objet ${JSON.stringify(b)}`);
            break;
        default:
            res.status(400).send("Problème de formattage du corp de la requête...")
    }
});

app.listen(port, () => {
    console.log(`Le serveur basé sur le framework Express est actif sur le port ${port}`)
})