//Headings of scoreboard
const HEADINGS =  document.getElementsByClassName('hidden');

class Playerlist{

    //values will be displayed on scoreboard
    nicknames = [];
    ranks = [];
    points_per_player = [];

    static showScoreboard() {
        var arr = Array.prototype.slice.call(HEADINGS)
        arr.forEach(heading => {
            //heading.style.fontSize = 'x-large';
            heading.style.visibility = 'visible';
        });
        /*
        if (this.isShown){
            arr.forEach(heading => {
                heading.style.fontSize = '0px';
            });
            this.isShown = false;
        }
        else{
            arr.forEach(heading => {
                heading.style.fontSize = 'x-large';
            });
            this.isShown = true;
        }
        */
    }
    
    static hideScoreboard(){
        var arr = Array.prototype.slice.call(HEADINGS)
        arr.forEach(heading => {
            //heading.style.fontSize = '0px';
            heading.style.visibility = 'hidden';
        });
    }

    // players is a list of all players in the game
    // with jQuerry 
    // aktualisierung bei Tab druck oder mit setInterval()
    static populateList(players) {
        //TODO: clear html player entries here

        // loops through list containing every player
        for (let i = 0; i<players.length; i++){
            // loops throug every possible rank (why? --> to display them in the right order on scoreboard)
            for (let rankCount = 1; rankCount <= players.length; rankCount++){
                if (players[i].rank == rankCount){
                   //TODO: add players (name, point, rank) to html 
                }
            }
        }
        return 0;
    }
}


/**
 * ToDo -> Implement updateRank, based on the points
 */
function updateRank(oldRank){

}