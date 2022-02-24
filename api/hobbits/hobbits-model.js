const db = require('../../data/dbConfig.js')

module.exports = {
  insert,
  getAll,
  getById,
}

function getAll() {
  return db('hobbits')
}

function getById(id) {
  return db('hobbits').where('id', id).first();
}

async function insert(hobbit) {
  const [id] = await db('hobbits').insert(hobbit);
  return getById(id);
}