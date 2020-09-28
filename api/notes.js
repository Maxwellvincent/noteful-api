const express = require('express');
//These bring in the methods to CRUD
const queries = require('../db/queries');

// Here we created a notesRouter which we can use in the app.js, will need to export it

const notesRouter = express.Router();

// Validation of note has to have a title folder select
function validNote(notes){
    const noteTitle = typeof notes.name == 'string';
    
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
    queries.createNote(req.body).then(note => {
        res.json(note);
    });

    // if(validNote(req.body)) {
    //     // inset into db
        
    // }else {
    //     next(new Error('Invalid note'));
    // }
});

module.exports = notesRouter;