const express = require('express');
const queries = require('../db/queries');
const foldersRouter = express.Router();

// function isValidId(req,res,next){
//     if(!isNaN(req.params.id)) return next();
//     next(new Error('Invalid ID'))
// }

function validFolder(folder){
    const folderTitle = typeof folder.name === 'string';
}

foldersRouter.get('/', (req,res,next) => {
    queries.getAllFolders().then(folders => {
        res.json(folders);
    })
});


foldersRouter.get('/:id',queries.isValidId, (req,res,next) => {
    
    queries.getOneFolder(req.params.id).then(folder => {
        if(folder){
            res.json(folder);
        }else {
            next();
        }
        
    });

});


foldersRouter.post('/', (req, res, next) => {
    console.log(req.body);
    if(validFolder(req.body)) {
        // inset into db
        queries.createFolder(req.body).then(folder => {
            res.json(folder[0]);
        })
    }else {
        next(new Error('invalid Folder'));
    }
});


    



module.exports = foldersRouter;