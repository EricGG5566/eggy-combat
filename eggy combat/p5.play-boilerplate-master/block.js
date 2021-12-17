class block {
    constructor(x,y,width, height){
        var options = {isStatic : true}
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var post = this.body.position;
        push();
        
       
        rectMode(CENTER);
        rect(post.x,post.y, this.width, this.height);
        pop();
       

    }
}