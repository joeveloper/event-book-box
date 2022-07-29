const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');


const app = express();

const PORT = 4000;

app.use(bodyParser.json());

// app.get('/', (req, res, next)  => {
//     res.send('hello, it works')
//     console.log('its working')
// })

app.use('/graphql', graphqlHttp({
    schema: null,
    rootValue: {}
})) 

app.listen(PORT);