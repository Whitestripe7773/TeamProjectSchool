class Rectangle{

    /**
     * @var {Size of rectangle} Size
     * @var {Position on the x-axis of the rect} xPos
     * @var {Position on the y-axis of the rect} yPos
     * @var {Direction that the rectangle moves to} direction
     * @var {Color of the rectangle} color
     * @var {2D List of visited fields [[x, y]])} visitedFields
     */
    size;
    xPos;
    yPos;
    direction;
    color;
    visitedFields = [];

    /** Constructor
     * xSize = Size in pixels on x-axis
     * ySize = Size in pixels to y-axis
     */
    constructor(rectSize){
        this.size = rectSize;
        this.xPos = getRandomX();
        this.yPos = getRandomY();
        this.direction = this.getRandomDirection();
        this.color = "blue";
    }

    /* Setter */
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
    setDirection(direction){
        this.direction = direction;
    }

    /* Utilities */

    /**
     * This methods is just for debug purpose
     */
    debug(){
        console.log(`X-Pos: ${this.xPos} \n Y-Pos: ${this.yPos}`)
    }

    /**
     * Generate a random start direction, depending on the distance to the sides
     * Direction:
     * 0 = right
     * 1 = up
     * 2 = left
     * 3 = down
     */
    getRandomDirection(){
        if (this.xPos > 300 & this.xPos < 1000){
            return 0
        }
        else if (this.yPos > 350 & this.yPos < 720){
            return 1
        }
        else if (this.xPos > 500 & this.xPos < 1000){
            return 2
        }
        return 3
    }

    /**
     * With this function the rectangle moves on the canvas, depending on the direction
     * @param {Canvas that we draw on} canvas 
     */
    move(canvas){
        switch(this.direction) {
            case 0:
              this.updateXPositive(canvas);
              break;
            case 1:
              this.updateYPositive(canvas);
              break;
            case 2:
              this.updateXNegative(canvas);
              break;  
            default:
              this.updateYNegative(canvas);
          }
    }

    /**
     * This method updates the position depending on the direction
     * @param {*} canvas 
     */
    updatePos(canvas){
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.rect(this.xPos + this.size, this.yPos, this.size, this.size);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        
        this.xPos += this.size;
    }

    /**
     * Go right
     * Draws new rectangle to the right side of the "old" one
     * We are updating the x-Position (+) on the canvas
     * @param {Canvas that we draw on} canvas
     */
    updateXPositive(canvas){
        this.xPos += this.size;
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.rect(this.xPos, this.yPos, this.size, this.size);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();

        //draws the rectangle with little dot in it
        ctx.beginPath();
        ctx.rect(this.xPos+this.size/4, this.yPos+this.size/4, this.size-this.size/2, this.size-this.size/2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();
        
        //clears the previous drawn rectangle with the little dot
        ctx.beginPath();
        //ctx.clearRect(this.xPos-this.size, this.yPos, this.size, this.size);
        ctx.rect(this.xPos-this.size, this.yPos, this.size, this.size)
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "black"
        ctx.lineWidth = 1
        ctx.fill();
        ctx.stroke();
        
    }

     /**
     * Go left
     * Draws new rectangle to the left side of the "old" one
     * We are updating the x-Position (-) on the canvas
     * @param {Canvas that we draw on} canvas
     */
    updateXNegative(canvas){
        this.xPos -= this.size;
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.rect(this.xPos, this.yPos, this.size, this.size);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();

        //draws the rectangle with little dot in it
        ctx.beginPath();
        ctx.rect(this.xPos+this.size/4, this.yPos+this.size/4, this.size-this.size/2, this.size-this.size/2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();

        //clears the previous drawn rectangle with the little dot
        ctx.beginPath();
        //ctx.clearRect(this.xPos+this.size, this.yPos, this.size, this.size);
        ctx.rect(this.xPos+this.size, this.yPos, this.size, this.size)
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "black"
        ctx.lineWidth = 1
        ctx.fill();
        ctx.stroke();
        
    }

    /**
     * Go up
     * Draws new rectangle on top of the "old" one
     * We are updating the y-Position (-) on the canvas
     * @param {Canvas that we draw on} canvas
     */
    updateYPositive(canvas){
        this.yPos -= this.size;
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.rect(this.xPos, this.yPos, this.size, this.size);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        
        //draws the rectangle with little dot in it
        ctx.beginPath();
        ctx.rect(this.xPos+this.size/4, this.yPos+this.size/4, this.size-this.size/2, this.size-this.size/2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();

        //clears the previous drawn rectangle with the little dot
        ctx.beginPath();
        //ctx.clearRect(this.xPos+this.size, this.yPos, this.size, this.size);
        ctx.rect(this.xPos, this.yPos+this.size, this.size, this.size)
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "black"
        ctx.lineWidth = 1
        ctx.fill();
        ctx.stroke();
    }
    
    /**
     * Go down
     * Draws new rectangle below the "old" one
     * We are updating the y-Position (+) on the canvas -> Start from top (0)
     * @param {Canvas that we draw on} canvas
     */
    updateYNegative(canvas){
        this.yPos += this.size;
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.rect(this.xPos, this.yPos, this.size, this.size);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();

         //draws the rectangle with little dot in it
         ctx.beginPath();
         ctx.rect(this.xPos+this.size/4, this.yPos+this.size/4, this.size-this.size/2, this.size-this.size/2);
         ctx.fillStyle = "red";
         ctx.fill();
         ctx.stroke();

         //clears the previous drawn rectangle with the little dot
        ctx.beginPath();
        //ctx.clearRect(this.xPos+this.size, this.yPos, this.size, this.size);
        ctx.rect(this.xPos, this.yPos-this.size, this.size, this.size)
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "black"
        ctx.lineWidth = 1
        ctx.fill();
        ctx.stroke();
        
    }

    addField(field){
        this.visitedFields.push(field);
    }
}

/**
 * This method returns a random number from 0 to max (inclusive)
 * @param {Max random number (inclusive)} max 
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

/**
 * This method returns a randomNumber for the x-position of the rectangle
 * Multiple of 10
 */
function getRandomX(){
    var x = Math.ceil((getRandomInt(1180) + 20 ) / 10) * 10;
    return x;
}

/**
 * This method returns a randomNumber for the y-position of the rectangle
 * Multiple of 10
 */
function getRandomY(){
    var y = Math.ceil((getRandomInt(700) + 20) / 10) * 10;
    return y;
}

