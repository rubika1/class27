class sling {
    constructor(bodyA,pointB){

        var Option={
        bodyA:bodyA,
        pointB:pointB,
        length:10,
        stiffness:0.01
        
        }
        this.pointB=pointB;
        this.body=Constraint.create(Option)
        World.add(world,this.body)
    }
    fly(){
        this.body.bodyA=null;
    
    }
    display(){
        if(this.body.bodyA){
        }
        strokeWeight(6)
     line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}