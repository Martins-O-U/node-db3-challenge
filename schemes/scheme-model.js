const db = require('../data/db-config')

module.exports ={
    find,
    findById,
    add,
    update,
    remove,
    findSteps,
    addStep
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

function remove(id) {
    return db('schemes')
        .where('id', id)
        .del();
}


function findSteps(id) {

    return db("steps")
        .join("schemes", "steps.scheme_id", "schemes.id", )
        .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
        .where({scheme_id: id})
        .orderBy("steps.step_number")

}

function addStep(step, scheme_id) {
    const body = {...step,...{scheme_id}}
    return db('steps').insert(body);
} 