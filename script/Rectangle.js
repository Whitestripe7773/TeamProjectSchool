class Rectangle{

    size;
    xPos;
    yPos;

    /** Constructor
     * xSize = Size in pixels on x-axis
     * ySize = Size in pixels to y-axis
     */
    constructor(rectSize){
        this.size = rectSize;
        this.xPos = getRandomX();
        this.yPos = getRandomY();
    }

    /** Setter */
    setXSize(x){
        this.x = x;
    }
    setYSize(y){
        this.y = y;
    }
    setXPos(xPos){
        this.xPos = xPos;
    }
    setYPos(yPos){
        this.yPos = yPos;
    }

    /** Utilities */
    debug(){
        return "Debug works!"
    }

    updateX(){
        var rectX = this.xSize;
        var rectY = this.ySize;
    
        var x = this.x += 1;
        this.x += 1;
    
        var c = document.getElementsByClassName("game-box");
        var ctx = c[0].getContext("2d");
        ctx.beginPath();
        ctx.fillRect(x, this.y, rectX, rectY);
        ctx.stroke();
        return [x, this.y, ctx];
    }
    
    
    updateY(){
    var rectX = this.xSize;
    var rectY = this.ySize;

    var y = this.y += 1;
    this.y += 1;

    var c = document.getElementsByClassName("game-box");
    var ctx = c[0].getContext("2d");
    ctx.beginPath();
    ctx.fillRect(this.x, y, rectX, rectY);
    ctx.stroke();
    return [this.x, y, ctx];
    }
}


function getRandomX(){
    var x = Math.floor(Math.random() * 100);
    return x;
}

function getRandomY(){
    var y = Math.floor(Math.random() * 100);
    return y;
}