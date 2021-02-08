// Add variables which needs to be used here: like points, rank etc.
//const div =  document.querySelector('div');
    //div.classList.remove('info');
const HEADINGS =  document.getElementsByClassName('hidden');
class Playerlist{
    //HEADINGS =  document.getElementsByClassName('hidden');


    nicknames = [];
    ranks = [];
    points_per_player = [];
    static isShown = false;

    static showScoreboard() {
        var arr = Array.prototype.slice.call(HEADINGS)

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
    }

    updateList(nicknames, ranks, points_per_player) {
        return 0;
    }
}


/**
 * ToDo -> Implement updateRank, based on the points
 */
function updateRank(oldRank){

}