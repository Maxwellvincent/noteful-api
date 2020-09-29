// All queries are kept in this file for all CRUD methods
const knex = require('./knex'); // this is the CONNECTION


module.exports = {
    // Function that grabs and list all the notes or folders
    getAllFolders() {
        //This knex statement SELECTS all data in folders
        return knex('folders')
    },
    getAllNotes() {
        return knex('notes');
    },
    getOneFolder(id){
        return knex('folders').where('id', id).first();
    },
    getOneNote(id){
        return knex('notes').where('id',id).first();
    },
    isValidId(req,res,next){
        if(!isNaN(req.params.id)) return next();
        next(new Error('Invalid ID'))
    },
    createNote(note){
        return knex('notes').insert(note, '*');
    },
    createFolder(folder){
        return knex('folders').insert(folder, '*');
    },
    updateFolder(id, folder){
        return knex('folders').where('id', id).update(folder,"*");
    },
    updateNote(id, note){
        //"*" returns all rows of data information
        return knex('notes').where('id', id).update(note,"*");
    },
    deleteFolder(id){
        return knex('folders').where('id',id).delete();
    },
    deleteNote(id){
        return knex('notes').where('id',id).delete();
    }

}