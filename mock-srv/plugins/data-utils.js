'use strict'
const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  fastify.decorateRequest('insertData', function insert (data) {
    const request = this
    data.push({...request.body})
  })
})