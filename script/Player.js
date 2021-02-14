class Player extends Rectangle{

    static points_name = [[]]; // 2D List storing the following information of every player: [ [points, name], [points, name],... ]
    nickname;
    colour;
    rectangle;

    rank;
    points;

    constructor(nickname, colour, rectangle){
        this.nickname = nickname;
        this.colour = colour;
        this.rectangle = rectangle;
    }

    calculatePoints(){
    }

    calclulateRank(){
        points_name.sort

        name_points.array.forEach(player => {
            if (this.nickname == player){
                this.rank = player[1];
            }
        });
    }

}