require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const foldersRouter = require('../api/folders');
const notesRouter = require('../api/notes')
const bodyParser = require('body-parser');

const app = express()

const morganOption = (NODE_ENV === 'production')
    ? 'tiny'
    : 'common';


// Have to use bodyParser when send POST request, and it has to be called earlier!

app.use(bodyParser.json());
app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

app.use('/note', cors(), notesRouter);
app.use('/notes', cors(), notesRouter);
app.use('/folders', cors(), foldersRouter);

app.use('/api/v1/folders',cors (), foldersRouter);
app.use('/api/v1/notes',cors(), notesRouter);

app.use(function errorHandler(error, req, res, next) {
    let response;
    if(NODE_ENV === 'production'){
    response = {error: {message: "server error"}}
    } else {
    console.error(error)
    response = {message: error.message,error}
    }
    res.status(500).json(response)
});



app.get('/', (req, res) => {
    res.send("Hello, world!");
})

module.exports = app