const express = require('express');
const queries = require('../db/queries');
const foldersRouter = express.Router();

// function isValidId(req,res,next){
//     if(!isNaN(req.params.id)) return next();
//     next(new Error('Invalid ID'))
// }

// function validFolder(folders){
//     const folderTitle = typeof folders.name === 'string';
// }

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
    queries.createFolder(req.body).then(folder => {
        res.json(folder[0]);
    });
    // if(validFolder(req.body)) {
    //     // inset into db
    //     queries.createFolder(req.body).then(folder => {
    //         res.json(folder[0]);
    //     })
    // }else {
    //     next(new Error('invalid Folder'));
    // }
});

foldersRouter.put('/:id', queries.isValidId, (req, res, next) => {
 //Is valid checks the id and makes sure its an id that is in the table
    queries.updateFolder(req.params.id, req.body).then(folder => {
        // Not getting anything in return here?
        res.json(folder[0]);
    })
});

foldersRouter.delete('/:id', queries.isValidId,(req, res, next) => {
    queries.deleteFolder(req.params.id).then(() => {
        res.json({
            deleted: true
        });
    });
});

    



module.exports = foldersRouter;