class plane{

    constructor(x, y, z, w, h, l){

        this.points = [];
        this.points.push(new Vector(3, [x, y, z]));
        this.points.push(new Vector(3, [x + w, y, z]));
        this.points.push(new Vector(3, [x + w, y + h, z]));
        this.points.push(new Vector(3, [x, y + h, z]));

        this.points.push(new Vector(3, [x, y, z - l]));
        this.points.push(new Vector(3, [x + w, y, z - l]));
        this.points.push(new Vector(3, [x + w, y + h, z - l]));
        this.points.push(new Vector(3, [x, y + h, z - l]));

    }

    draw(){    
        
        fill('#ffffff');
        
        beginShape(TRIANGLES);

        //Face Frontal
            vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
            vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        
            vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
            vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
            
        //Face Frontal
            vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
            vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));
            vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
    
            vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));
            vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));
            vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));

        //Face Esquerda
            vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
            vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
            vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));

            vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
            vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
            vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3)); 

        //Face Direita
            vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));
            vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));

            vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
            vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));         

        //Face Superior
            vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
            vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));

            vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
            vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));
            
        //Face Inferior
            vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
            vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
            vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));

            vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
            vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
            vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));        

        endShape();
    }
}

class Parallelogram{

    constructor(x, y, z, w, h, l){

        this.points = [];
        this.points.push(new Vector(3, [x, y, z]));
        this.points.push(new Vector(3, [x + w, y, z]));
        this.points.push(new Vector(3, [x + w, y + h, z]));
        this.points.push(new Vector(3, [x, y + h, z]));

        this.points.push(new Vector(3, [x, y, z - l]));
        this.points.push(new Vector(3, [x + w, y, z - l]));
        this.points.push(new Vector(3, [x + w, y + h, z - l]));
        this.points.push(new Vector(3, [x, y + h, z - l]));

    }

    draw(){    
        
        fill('#ffffff');
        
        beginShape(TRIANGLES);

        //Face Frontal
            vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
            vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        
            vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
            vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
            
        //Face Frontal
            vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
            vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));
            vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
    
            vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));
            vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));
            vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));

        //Face Esquerda
            vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
            vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
            vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));

            vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
            vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
            vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3)); 

        //Face Direita
            vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));
            vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));

            vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
            vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));         

        //Face Superior
            vertex(this.points[0].get(1), this.points[0].get(2), this.points[0].get(3));
            vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));

            vertex(this.points[1].get(1), this.points[1].get(2), this.points[1].get(3));
            vertex(this.points[4].get(1), this.points[4].get(2), this.points[4].get(3));
            vertex(this.points[5].get(1), this.points[5].get(2), this.points[5].get(3));
            
        //Face Inferior
            vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
            vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
            vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));

            vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
            vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
            vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));        

        endShape();
    }
}

class pyramid {

    constructor(x, y, z, w, h, l, hp){
        let p1 = (x+w)/2;
        let p3 = (z-h)/2;

        this.points = [];
        this.points.push(new Vector(3, [x, y, z]));
        this.points.push(new Vector(3, [x + w, y, z]));
        this.points.push(new Vector(3, [x + w, y + h, z]));
        this.points.push(new Vector(3, [x, y + h, z]));

        this.points.push(new Vector(3, [x, y, z - l]));
        this.points.push(new Vector(3, [x + w, y, z - l]));
        this.points.push(new Vector(3, [x + w, y + h, z - l]));
        this.points.push(new Vector(3, [x, y + h, z - l]));

        this.points.push(new Vector(3, [p1, y - hp, p3]));
        

    }

    draw(){

        beginShape(TRIANGLES);

        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[8].get(1), this.points[8].get(2), this.points[8].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));

        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
        vertex(this.points[8].get(1), this.points[8].get(2), this.points[8].get(3));
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));

        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
        vertex(this.points[8].get(1), this.points[8].get(2), this.points[8].get(3));
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));

        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));
        vertex(this.points[8].get(1), this.points[8].get(2), this.points[8].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));

        
        //base
        vertex(this.points[3].get(1), this.points[3].get(2), this.points[3].get(3));
        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));

        vertex(this.points[2].get(1), this.points[2].get(2), this.points[2].get(3));
        vertex(this.points[7].get(1), this.points[7].get(2), this.points[7].get(3));
        vertex(this.points[6].get(1), this.points[6].get(2), this.points[6].get(3));

        endShape();

    }
}

class sphere{
    constructor(x, y, z, r, t, p){
        this.x = x
        this.y = y
        this.z = z
        this.radius = r  //r largura   
        this.stacks = t  //t quantidade de pilhas
        this.sectors = p //p quantidade de setores

        this.points = []
        var x1, y1, z1, xy
        var sectorStep = 2 * Math.PI / this.sectors
        var stackStep = Math.PI / this.stacks
        var stackAngle, sectorAngle

        for(var i = 0; i <= this.stacks; i++){
            stackAngle = Math.PI / 2 - i * stackStep
            xy = this.radius * Math.cos(stackAngle)
            y1 = this.y + this.radius * Math.sin(stackAngle)

            for(var j = 0; j < this.sectors + 1; j++){
                sectorAngle = j * sectorStep
                z1 = this.z + (xy * Math.cos(sectorAngle))
                x1 = this.x + (xy * Math.sin(sectorAngle))
                this.points.push(new Vector(3, [x1, y1, z1]))
            }
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
        //noStroke();
        fill(this.r, this.g, this.b);
        strokeWeight(this.w)

        beginShape(TRIANGLES)
        var k1, k2
        for(var i = 0; i < this.stacks; i++){
            k1 = i * (this.sectors + 1)
            k2 = k1 + this.sectors + 1

            for(var j = 0; j < this.sectors; j++, k1++, k2++){
                if(i != 0){
                    vertex(this.points[k1].elements[0], this.points[k1].elements[1], this.points[k1].elements[2])
                    vertex(this.points[k2].elements[0], this.points[k2].elements[1], this.points[k2].elements[2])
                    vertex(this.points[k1 + 1].elements[0], this.points[k1 + 1].elements[1], this.points[k1 + 1].elements[2])
                }
    
                if(i != this.stacks - 1){
                    vertex(this.points[k1 + 1].elements[0], this.points[k1 + 1].elements[1], this.points[k1 + 1].elements[2])
                    vertex(this.points[k2].elements[0], this.points[k2].elements[1], this.points[k2].elements[2])
                    vertex(this.points[k2 + 1].elements[0], this.points[k2 + 1].elements[1], this.points[k2 + 1].elements[2])
                }
            }
        }
        endShape()
    }
    

    rotation3Dy(value){
        var t = new Transformations
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.rotation3Dy(this.points[i], value)
        }
    }

    translate3D(x, y, z){
        var t = new Transformations
        for(var i = 0; i < this.points.length; i++){
            this.points[i] = t.translate3D(this.points[i], x, y, z)
        } 
    }
}
