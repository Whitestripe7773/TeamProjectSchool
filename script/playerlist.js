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
            heading.style.fontSize = 'x-large';
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
            heading.style.fontSize = '0px';
        });
    }

    updateList(nicknames, ranks, points_per_player) {
        // will be implemented soon
        return 0;
    }
}


/**
 * ToDo -> Implement updateRank, based on the points
 */
function updateRank(oldRank){

}