class Rect
{
    constructor(x,y,width,height)
    {
        var option={
            isStatic:true
        }
        this.dustbinObject=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.dustbinObject);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

    }

    display()
    {
        fill("black");
        noStroke();
        rectMode(CENTER);
        rect(this.dustbinObject.position.x,this.dustbinObject.position.y,this.width,this.height);

    }
}
