class line{

    constructor(x1, y1, x2, y2){
        
        this.points = [];

        this.points.push(new Vector(3, [x1, y1, 1]));
        this.points.push(new Vector(3, [x2, y2, 1]));
        
    }

    draw(){

        beginShape(TRIANGLES);

        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));

        endShape(CLOSE);
    }
}

class rectangle{

    constructor(x, y, w, h){

        this.points = [];

        this.points.push(new Vector(3, [x, y, 1]));
        this.points.push(new Vector(3, [x + w, y, 1]));
        this.points.push(new Vector(3, [x + w, y + h, 1]));
        this.points.push(new Vector(3, [x, y + h, 1]));
    }

    draw(){
        //noStroke();

        beginShape(TRIANGLES);
        
        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));
        vertex(this.points[3].get(1), this.points[3].get(2));

        vertex(this.points[1].get(1), this.points[1].get(2));
        vertex(this.points[2].get(1), this.points[2].get(2));
        vertex(this.points[3].get(1), this.points[3].get(2));

        endShape(CLOSE);
    }
}

class triangle{

    constructor(x1, y1, x2, y2, x3, y3){

        this.points = [];

        this.points.push(new Vector(3, [x1, y1, 1]));
        this.points.push(new Vector(3, [x2, y2, 1]));
        this.points.push(new Vector(3, [x3, y3, 1]));        
        
    }

    draw(){

        beginShape(TRIANGLES);

        vertex(this.points[0].get(1), this.points[0].get(2));
        vertex(this.points[1].get(1), this.points[1].get(2));
        vertex(this.points[2].get(1), this.points[2].get(2));

        endShape();

    }
}

class circle{
    constructor(x, y, r, t){
        let angle = (Math.PI * 2)/t
        this.x = x
        this.y = y
        this.r = r
        this. t = t

        this.points = []
        for(var i = 0; i < this.k; i++){
            this.points.push(new Vector(2, [this.x + (this.r * Math.cos(i * angle)), this.y + (this.r * Math.sin(i * angle))]))
        }

        this.r = 0;
        this.g = 0;
        this.b = 0;

    }

    setColor(r,g,b){
        this.r = r;
        this.g = g;
        this.b = b;
      }

      setWeight(w){
        this.w = w;
      }

      draw(){
        stroke(this.r, this.g, this.b)
        strokeWeight(this.w)

        beginShape(TRIANGLES)
    
        for(var j = 0; j < this.k; j++){
            if(j == (this.k - 1)){
                vertex(this.points[0].elements[0], this.points[0].elements[1])
                vertex(this.points[j].elements[0], this.points[j].elements[1])
                vertex(this.points[0].elements[0], this.points[0].elements[1])
            }else{
                vertex(this.points[0].elements[0], this.points[0].elements[1])
                vertex(this.points[j].elements[0], this.points[j].elements[1])
                vertex(this.points[j + 1].elements[0], this.points[j + 1].elements[1])    
            }
        }
    
        endShape();
    }


    rotate2D(angle){
        var t = new Transformations()
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.rotate2D(this.points[i],  angle)
        }
    }    
}