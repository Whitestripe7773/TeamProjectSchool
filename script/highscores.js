const API = 'http://localhost:3000'

/**
 * Async function which makes a GET request to the server (API) to retrieve data and write them into a new html element
 * @param {API Method (e. g. GET or POST)} method 
 * @param {Data that is sent} payload 
 */
const getPlayerData = async (foo, method = 'GET', payload) => {
    const testDiv = document.querySelector('#test')
    testDiv.innerHTML = ''
    // Headers and body that is sent with the call
    const send = method === 'GET' ? {} : {
      headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin'},
      body: JSON.stringify(payload)
    }
    // Waits until the response is fetched and the data is parsed to JSON
    const res = await fetch( ` ${API}/highscores ` , { method, ...send })
    const data = await res.json()
    // For every player in the response(data) -> Creates a new "p" tag and write the playerName and points into it
    for (const player of data) {
      const item = document.createElement('p')
      item.innerHTML = JSON.stringify(player['playerName']);
      item.innerHTML += "<br> Points: " +  JSON.stringify(player['points'])
      testDiv.appendChild(item)
    }

    const item = document.createElement('p');
    item.innerHTML = sessionStorage.getItem("pName");
    item.innerHTML += "<br> Points: " + sessionStorage.getItem(sessionStorage.getItem("pName") + "-points");
    testDiv.appendChild(item);
}

// Starts the function when the highscore site is loaded
window.onload = function() {
    getPlayerData("highscores", "GET", "test");

    const payload = {
      playerName: sessionStorage.getItem("pName"),
      points: sessionStorage.getItem(sessionStorage.getItem("pName") + "-points")
    }
    getPlayerData("highscores", 'POST', payload);
}