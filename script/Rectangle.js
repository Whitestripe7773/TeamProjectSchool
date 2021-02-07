class Rectangle{

    /**
     * @var {size of rectangle} Size
     * @var {position on the x-axis of the rect} xPos
     * @var {position on the y-axis of the rect} yPos
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
    setDirection(direction){
        this.direction = direction;
    }

    /** Utilities */
    debug(){
        return "Debug works!"
    }

    /**
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
     * Go right
     */
    updateXPositive(canvas){
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.rect(this.xPos + this.size, this.yPos, this.size, this.size);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        
        this.xPos += this.size;
    }

     /**
     * Go left
     */
    updateXNegative(canvas){
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.rect(this.xPos - this.size, this.yPos, this.size, this.size);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        
        this.xPos -= this.size;
    }

    /**
     * Go up
     */
    updateYPositive(canvas){
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.rect(this.xPos, this.yPos - this.size, this.size, this.size);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        
        this.yPos -= this.size;
    }
    
    /**
     * Go down
     */
    updateYNegative(canvas){
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.rect(this.xPos, this.yPos + this.size, this.size, this.size);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        
        this.yPos += this.size;
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
 */
function getRandomX(){
    var x = getRandomInt(1180) + 20;
    return x;
}

/**
 * This method returns a randomNumber for the y-position of the rectangle
 */
function getRandomY(){
    var y = getRandomInt(700) + 20;
    return y;
}

