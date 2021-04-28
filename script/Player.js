class Player extends Rectangle{

    static players = []; // List of all existing players
    nickname;
    color;

    rank;
    points;

    constructor(nickname, color){
        super(10);
        this.nickname = nickname;
        this.color = color;
        this.rank = 1;
        this.points = 0;
        Player.players.push(this)
    }

    /**
     * Updates the points of the player object
     */
    updatePoints(){
        this.points = this.visitedFields.length
    }

    /**
     * Calculates the rank of the player
     */
    calclulateRank(){
        let curr_rank = 1;
        for (let i = 0; i < players.length; i++){
            // If a player exists with a higher rank --> player who calls this method gets "deranked" (rank += 1)
            if (this.points < players[i].points){
                curr_rank += 1;
            }
        }
        this.rank = curr_rank;
    }

}