'use strict'
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return [
      {id: 1, playerName: "Jan", points: 100},
      {id: 2, playerName: "Dominik", points: 400},
      {id: 3, playerName: "Nico", points: 699},
      {id: 4, playerName: "Daniel", points: 16400}
    ]
  })
}