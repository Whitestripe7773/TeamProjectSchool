const API = 'http://localhost:3000'

const getName = async (category, method = 'GET', payload) => {
    const testDiv = document.querySelector('#test')
    testDiv.innerHTML = ''
    const send = method === 'GET' ? {} : {
      headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin'},
      body: JSON.stringify(payload)
    }
    const res = await fetch( ` ${API}/testing ` , { method, ...send })
    const data = await res.json()
    for (const player of data) {
      const item = document.createElement('p')
      item.innerHTML = JSON.stringify(player['playerName']);
      item.innerHTML += "<br> Points:" +  JSON.stringify(player['points'])
      testDiv.appendChild(item)
    }
}

window.onload = function() {
    getName("testing", "GET", "test");
}