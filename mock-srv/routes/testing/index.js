'use strict'

//var csv is the CSV file with headers
function csvJSON(csv){

  let result = [];
  let lines=csv.split("\n");
  let headers = lines[0].split(",");

  for(let i = 1; i < lines.length; i++){

      let obj = {};
      let currentline=lines[i].split(",");

      for(var j = 0; j < headers.length; j++){
          obj[headers[j]] = currentline[j];
      }
      result.push(obj);
  }

  console.log("Testing: " + result);
  return result;
}

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    
    /*
    let data = [
      {id: 1, playerName: "Alfred Alphatester", points: 12324},
      {id: 2, playerName: "Beate Beta", points: 300},
      {id: 3, playerName: "Janimann", points: 699},
      {id: 4, playerName: "Luca Krombacher (alkoholfrei)", points: 16400}
    ]
    */
   
    
    return csvJSON("../../../test.csv");
  });
}
