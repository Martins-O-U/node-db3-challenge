const db = require('../data/db-config')

module.exports ={
    find,
    findById,
    add,
    update
}

function find (){
    return db("schemes");
}

function findById(id){
    return db('schemes').where({id}).first()
}

function add (scheme) {
    return db("schemes").insert(scheme)
        .then(id =>{
            return findById(id[0]);
        })
}

function update(changedScheme, id) {
    return db('schemes')
      .where({ id })
      .update(changedScheme);
  }