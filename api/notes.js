const express = require('express');
//These bring in the methods to CRUD
const queries = require('../db/queries');

// Here we created a notesRouter which we can use in the app.js, will need to export it

const notesRouter = express.Router();

// Validation of note has to have a title folder select
function validNote(note){
    const noteTitle = typeof note.name == 'string' && note.title.trim() != "";
    
}

notesRouter.get('/', (req,res,next) => {
    queries.getAllNotes().then(notes => {
        res.json(notes);
    }); 
});

notesRouter.get('/:id',queries.isValidId, (req,res,next) => {
    queries.getOneNote(req.params.id).then(note => {
        res.json(note);
    });    
});


notesRouter.post('/', (req,res, next) => {
   
    if(validNote(req.body)) {
        // inset into db
        queries.createNote(req.body).then(note => {
            res.json(note);
        })
    }else {
        next(new Error('Invalid note'));
    }
});

module.exports = notesRouter;