class Player extends Rectangle{

    static name_points = [[]]; // 2D List storing the following information of every player: [ [name, points], [name, points],... ]
    nickname;
    colour;

    rank;
    points;

    constructor(nickname, colour){
        super(10);
        this.nickname = nickname;
        this.colour = colour;
    }

    calculatePoints(){
    }

    calclulateRank(name_points){
        //sorts the list of players: The player with the least points has the first entry.
        name_points.sort(function(a, b){
            return a[1] - b[1];
        });

        rank_counter = name_points.length; // in the beginning: last rank

        name_points.forEach(player_data => {
            if (this.nickname == player_data[1]){
                this.rank = rank_counter;
                return 0; // this should stop the function 
            }
            rank_counter -= 1;
        });
    }

}