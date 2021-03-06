const SCOREBOARD =  document.getElementsByClassName('hidden');
const NICKNAME = document.getElementById('nickname');

class Playerlist{

    /**
     * This method makes the scoreboard visible on 
     * screen
     * @param {List of all players} players 
     */
    static showScoreboard(players) {
        Playerlist.populateList(players)
        var arr = Array.prototype.slice.call(SCOREBOARD)
        arr.forEach(heading => {
            heading.style.visibility = 'visible';
        });
    }
    
    /**
     * This method makes the scoreboard 
     * invisible 
     */
    static hideScoreboard(){
        $("p").remove() //--> Entries of scoreboard get removed when board is hidden
        var arr = Array.prototype.slice.call(SCOREBOARD)
        arr.forEach(heading => {
            heading.style.visibility = 'hidden';
        });
    }

    /**
     * This method updates the ranking list with the players and populates them
     * @param {List of all players} players 
     */
    static populateList(players) {
        // this if statement fixes the bug with endless entries when holding down "Q"
        if( $('#nickname').children().length == 1 ){
            // loops through list containing every player
            for (let i = 0; i<players.length; i++){
                // loops through every possible rank (why? --> to display them in the right order on scoreboard)
                for (let rankCount = 1; rankCount <= players.length; rankCount++){
                    if (players[i].rank == rankCount){
                        // adds players (name, point, rank) to html 
                        $("#nickname").append("<p class='hidden' id='entry' style='color: "+players[i].color+";'><b>"+players[i].nickname+"</b></p>");
                        $("#rank").append("<p class='hidden' id='entry' style='color: "+players[i].color+";'><b>"+players[i].rank+"</b></p>");
                        $("#score").append("<p class='hidden' id='entry' style='color: "+players[i].color+";'><b>"+players[i].points+"</b></p>");
                    }
                }
            }
        }
    }
}