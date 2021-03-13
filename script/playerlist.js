const SCOREBOARD =  document.getElementsByClassName('hidden');
const NICKNAME = document.getElementById('nickname');

class Playerlist{

    //values will be displayed on scoreboard
    nicknames = [];
    ranks = [];
    points_per_player = [];

    static showScoreboard(players) {
        Playerlist.populateList(players)
        var arr = Array.prototype.slice.call(SCOREBOARD)
        arr.forEach(heading => {
            //heading.style.fontSize = 'x-large';
            heading.style.visibility = 'visible';
        });
    }
    
    static hideScoreboard(){
        $("p").remove() //--> entries of scoreboard get removed when board is hidden
        var arr = Array.prototype.slice.call(SCOREBOARD)
        arr.forEach(heading => {
            //heading.style.fontSize = '0px';
            heading.style.visibility = 'hidden';
        });
    }

    // players is a list of all players in the game
    // with jQuerry 
    // aktualisierung bei Tab druck oder mit setInterval()
    static populateList(players) {
        // this if statement fixes the bug with endless entries when holding down "Q"
        if( $('#nickname').children().length == 1 ){
            // loops through list containing every player
            for (let i = 0; i<players.length; i++){
                // loops throug every possible rank (why? --> to display them in the right order on scoreboard)
                for (let rankCount = 1; rankCount <= players.length; rankCount++){
                    if (players[i].rank == rankCount){
                    //TODO: add players (name, point, rank) to html 
                    $("#nickname").append("<p class='hidden' id='entry'>"+players[i].nickname+"</p>");
                    $("#rank").append("<p class='hidden' id='entry'>"+players[i].rank+"</p>");
                    $("#score").append("<p class='hidden' id='entry'>"+players[i].points+"</p>");
                    }
                }
            }
        }
    }
}


/**
 * ToDo -> Implement updateRank, based on the points
 */
function updateRank(oldRank){

}