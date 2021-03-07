class Player extends Rectangle{

    static players = []; // list of all existing players
    nickname;
    color;

    rank;
    points;

    constructor(nickname, color){
        super(10);
        this.nickname = nickname;
        this.color = color;
        players.push(this)
    }

    updatePoints(){
        //the value of a point could be adjusted (maybe visitedFields.length / 10)
        this.points = this.visitedFields.length

        //QUESTION: will players[] get updated automatically? (call by refrence?)
    }

    calclulateRank(){
        let curr_rank = 1;
        for (let i = 0; i < players.length; i++){
            // if a player exists with a higher rank --> player who calls this method gets "deranked" (rank += 1)
            if (this.points < players[i].points){
                curr_rank += 1;
            }
        }
        this.rank = curr_rank;
    }

}