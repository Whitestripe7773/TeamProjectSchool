'use strict'
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    
    let data = {
      "players": [
      {id: 1, playerName: "Alfred Alphatester", points: 12324},
      {id: 2, playerName: "Beate Betatester", points: 300},
      {id: 3, playerName: "Janimann", points: 699},
      {id: 4, playerName: "Luca Krombacher (alkoholfrei)", points: 16400},
      {id: 5, playerName: "Cheater", points: 99999999999999},
      {id: 6, playerName: "Tim Testmann", points: 5},
      {id: 7, playerName: "Bug User", points: -64}
      ]
    };

    let sortedData = data.players.sort(function(a, b){
      return b.points - a.points
    });

    return sortedData;
  });

  fastify.post('/', async function (request, reply) { 
    request.insertData(opts.prefix.slice(1), data) 
    return data 
  }) 
}
