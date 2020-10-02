const express = require('express');
const { isValidId } = require('../db/queries');
//These bring in the methods to CRUD
const queries = require('../db/queries');
const cors = require('cors');
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
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    queries.createNote(req.body).then(note => {
        res.json(note);
    });

    // if(validNote(req.body)) {
    //     // inset into db
        
    // }else {
    //     next(new Error('Invalid note'));
    // }
});

notesRouter.put('/:id', queries.isValidId, (req, res, next) => {
    queries.updateNote(req.params.id, req.body).then(note => {
        res.json(note[0]);
    });
});

notesRouter.delete('/:id', queries.isValidId, (req, res, next) => {
    queries.deleteNote(req.params.id).then(() => {
        res.json({
            deleted: true
        });
    });
});

module.exports = notesRouter;