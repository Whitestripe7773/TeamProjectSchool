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
    // TODO: implementing players[] in app.js 
    updateList(players) {

        return 0;
    }
}


/**
 * ToDo -> Implement updateRank, based on the points
 */
function updateRank(oldRank){

}