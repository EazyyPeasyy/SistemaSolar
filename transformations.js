class Transformations{
    reflect2Dx(vector){
        var newPoint
        var LA = new LinearAlgebra
        var point = new Matrix(3, 1, [vector.get(1,1), vector.get(2,1), 1])

        var ref = new Matrix(3, 3, [
            1, 0, 0,
            0, -1, 0,
            0, 0, 1
        ])

        newPoint = LA.dot(ref, point)
        return newPoint
    }

    reflect2Dy(vector){
        var newPoint
        var LA = new LinearAlgebra
        var point = new Matrix(3, 1, [vector.get(1,1), vector.get(2,1), 1])

        var ref = new Matrix(3, 3, [
            -1, 0, 0, 
            0, 1, 0,
            0, 0, 1
        ])

        newPoint = LA.dot(ref, point)
        return newPoint
    }

    projection2Dx(vector){
        var newPoint
        var LA = new LinearAlgebra
        var point = new Matrix(3, 1, [vector.get(1,1), vector.get(2,1), 1])

        var ref = new Matrix(3, 3, [
            1, 0, 0,
            0, 0, 0,
            0, 0, 1 
        ])

        newPoint = LA.dot(ref, point)
        return newPoint
    }

    projection2Dy(vector){
        var newPoint
        var LA = new LinearAlgebra
        var point = new Matrix(3, 1, [vector.get(1,1), vector.get(2,1), 1])

        var ref = new Matrix(3, 3, [
            0, 0, 0,
            0, 1, 0,
            0, 0, 1
        ])

        newPoint = LA.dot(ref, point)
        return newPoint
    }

    rotation2D(vector, value){
        value = value * Math.PI/180
        var newPoint
        var LA = new LinearAlgebra
        var point = new Matrix(3, 1, [vector.get(1,1), vector.get(2,1), 1]) 
        
        var Rot = new Matrix(3, 3,[ 
            Math.cos(value), -(Math.sin(value)), 0,
            Math.sin(value), Math.cos(value),    0,
            0,              0,               1
            ])
        
        newPoint = LA.dot(Rot, point)
        return newPoint
    }
    

    translate2D(vector, dx, dy){
        var newPoint
        var LA = new LinearAlgebra
        var point = new Matrix(3, 1, [vector.get(1,1), vector.get(2,1), 1])

        var tra = new Matrix(3, 3, [
            1,0,dx,
            0,1,dy,
            0,0,1
        ])
        
        newPoint = LA.dot(tra, point)
        return newPoint
    }
    
 

    reflect3Dx(vector){
        var newPoint
        var LA = new LinearAlgebra
        var point = new Matrix(4, 1, [vector.get(1,1), vector.get(2,1), vector.get(3,1), 1])

        var ref = new Matrix(4, 4, [
            1, 0, 0,  0,
            0, -1, 0, 0,
            0, 0, -1, 0,
            0, 0, 0,  1
        ])

        newPoint = LA.dot(ref, point)
        return newPoint
    }

    reflect3Dy(vector){
        var newPoint
        var LA = new LinearAlgebra
        var point = new Matrix(4, 1, [vector.get(1,1), vector.get(2,1), vector.get(3,1), 1])

        var ref = new Matrix(4, 4, [
            -1, 0, 0, 0,
            0, 1, 0,  0,
            0, 0, -1, 0,
            0, 0, 0,  1
        ])

        newPoint = LA.dot(ref, point)
        return newPoint
    }

    reflect3Dz(vector){
        var newPoint
        var LA = new LinearAlgebra
        var point = new Matrix(4, 1, [vector.get(1,1), vector.get(2,1), vector.get(3,1), 1])

        var ref = new Matrix(4, 4, [
            -1, 0, 0, 0,
            0, -1, 0, 0,
            0, 0, 1,  0,
            0, 0, 0,  1 
        ])

        newPoint = LA.dot(ref, point)
        return newPoint
    }

    projection3Dxz(vector){
        var newPoint
        var LA = new LinearAlgebra
        var point = new Matrix(4, 1, [vector.get(1,1), vector.get(2,1), vector.get(3,1), 1])

        var pro = new Matrix(4, 4, [
            1, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ])

        newPoint = LA.dot(pro, point)
        return newPoint
    }

    projection3Dyx(vector){
        var newPoint
        var LA = new LinearAlgebra
        var point = new Matrix(4, 1, [vector.get(1,1), vector.get(2,1), vector.get(3,1), 1])

        var pro = new Matrix(4, 4, [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 1
        ])

        newPoint = LA.dot(pro, point)
        return newPoint
    }

    projection3Dzy(vector){
        var newPoint
        var LA = new LinearAlgebra
        var point = new Matrix(4, 1, [vector.get(1,1), vector.get(2,1), vector.get(3,1), 1])

        var pro = new Matrix(4, 4, [
            0, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ])

        newPoint = LA.dot(pro, point)
        return newPoint
    }

    rotation3Dx(vector, value){
        value = value * Math.PI/180
        var newPoint
        var LA = new LinearAlgebra
        var point = new Matrix(4, 1, [vector.get(1,1), vector.get(2,1), vector.get(3,1), 1])
        
        var Rot = new Matrix(4,4,[
            1, 0, 0, 0,
            0, Math.cos(value), -(Math.sin(value)), 0, 
            0, Math.sin(value), Math.cos(value), 0,
            0, 0, 0, 1
            ])
        
        newPoint = LA.dot(Rot, point)
        return newPoint
    }

    rotation3Dy(vector, value){
        value = value * Math.PI/180
        var newPoint
        var LA = new LinearAlgebra
        var point = new Matrix(4, 1, [vector.get(1,1), vector.get(2,1), vector.get(3,1), 1])
        
        var Rot = new Matrix(4,4,[
            Math.cos(value), 0, Math.sin(value), 0,
            0, 1, 0, 0,
            -(Math.sin(value)), 0, Math.cos(value), 0,
            0, 0, 0, 1
            ])
        
        newPoint = LA.dot(Rot, point)
        return newPoint
    }
    
    rotation3Dz(vector, value){
        value = value * Math.PI/180
        var newPoint
        var LA = new LinearAlgebra
        var point = new Matrix(4, 1, [vector.get(1,1), vector.get(2,1), vector.get(3,1), 1])
        
        var Rot = new Matrix(4,4,[
            Math.cos(value), -(Math.sin(value)), 0, 0,
            Math.sin(value), Math.cos(value), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
            ])
        
        newPoint = LA.dot(Rot, point)
        return newPoint
    }

    translate3D(vector, x, y, z){
        var newPoint
        var LA = new LinearAlgebra
        var point = new Matrix(4, 1, [vector.get(1,1), vector.get(2,1), vector.get(3,1), 1])
        var tra = new Matrix(4, 4, [
            1,0,0,x,
            0,1,0,y,
            0,0,1,z,
            0,0,0,1
        ])
        
        newPoint = LA.dot(tra, point)
        return newPoint
    }
}