this.planets = [
                new sphere(0, 0, 0, 69.635, 15, 15),//sol
                new sphere((69.635 + 0.24397) + 5790/300, 0, 0, 0.24397, 10, 10),//mercurio
                new sphere((69.635 + 0.6052) + 10820/300, 0, 0, 0.6052, 10, 10),//venus
                new sphere((69.635 + 0.6371) + 14960/300,   0, 0, 0.6371, 10, 10),//terra
                new sphere((69.635 + 0.33895) + 22790/300, 0, 0, 0.33895, 10, 10),//marte
                new sphere((69.635 + 6.991) + 77830/300, 0, 0, 6.991, 10, 10),//jupter
                new sphere((69.635 + 5.823) + 143000/300, 0, 0, 5.823, 10, 10),//saturno
                new sphere((69.635 + 2.5362) + 287000/300, 0, 0, 2.5362, 10, 10),//uranio
                new sphere((69.635 + 2.4622) + 450000/300,  0, 0, 2.4622, 10, 10)//neturno
              ]
 
this.speed = [
              0,//sol
              1.59,//mercurio
              1.18,//venus 
              1,//terra
              0.808,//marte
              0.439,//jupter
              0.325,//saturno 
              0.228,//uranio
              0.182//neturno
            ]

this.speedS = [
                1,//lua(terra)
                0.808,//phtos(mar1)
                0.808,//deimos(mar2)

                0.439,//io(jup1)
                0.439,//europa(jup2)
                0.439,//ganimedes(jup3)

                0.325,//mimas(sat1)
                0.325,//encelado(sat2)
                0.325,//tetis(sat3)

                0.228,//ariel(ura1)
                0.228,//umbriel(ura2)
                0.228,//titania(ura3)

                0.182,//Tritão(nep1)
                0.182,//Proteus(nep2)
                0.182//Larissa(nep3)
]

this.s = [
            new sphere(((69.635 + 0.6371) + 14960/300 + ((0.136 + 0.6371) + 38.44/300)), -5, -2, 0.136, 10, 10),//lua(terra)

            new sphere(((69.635 + 0.33895) + 22790/300 + ((0.112 + 0.33895) + 0.938/300)), -5, -2, 0.112, 10, 10),//phtos(mar1)
            new sphere(((69.635 + 0.33895) + 22790/300 + ((0.062 + 0.33895) + 23.46/300)), 5, 2, 0.062, 10,10),//deimos(mar2)

            new sphere(((69.635 + 6.991) + 77830/300 + ((0.1815 + 6.991) + 42.16/300)), -10, -2, 0.1815, 10, 10),//io(jup1)
            new sphere(((69.635 + 6.991) + 77830/300 + ((0.1569 + 6.991) + 67.09/300)), 10, 2, 0.1569, 10, 10),//europa(jup2)
            new sphere(((69.635 + 6.991) + 77830/300 + ((0.2631 + 6.991) + 107/300)), -6, 6, 0.2631, 10, 10),//ganimedes(jup3)

            new sphere(((69.635 + 5.823) + 143000/300 + ((0.0196 + 5.823) + 18.85/300)), -10, 2, 0.0196, 10, 10),//mimas(sat1)
            new sphere(((69.635 + 5.823) + 143000/300 + ((0.0250 + 5.823) + 23.80/300)), 10, 2, 0.0250, 10, 10),//encelado(sat2)
            new sphere(((69.635 + 5.823) + 143000/300 + ((0.0530 + 5.823) + 29.46/300)), 6, 10, 0.0530, 10, 10),//tetis(sat3)

            new sphere(((69.635 +  2.5362) + 287000/300 + ((0.05789 +  2.5362) + 19.12/300)), -10, 2, 0.05789, 10, 10),//ariel(ura1)
            new sphere(((69.635 +  2.5362) + 287000/300 + ((0.05847 +  2.5362) + 26.59/300)), 10, 2, 0.05847, 10, 10),//umbriel(ura2)
            new sphere(((69.635 +  2.5362) + 287000/300 + ((0.07889 +  2.5362) + 43.58/300)), -6, 6, 0.07889, 10, 10),//titania(ura3)

            new sphere(((69.635 +  2.4622) + 450000/300 + ((0.135 +  2.4622) + 35.48/300)), 6, 6, 0.135, 10, 10),///Tritão(nep1)
            new sphere(((69.635 +  2.4622) + 450000/300 + ((0.021 +  2.4622) + 11.76/300)), 2, -6, 0.021, 10, 10),//Proteus(nep2)
            new sphere(((69.635 +  2.4622) + 450000/300 + ((0.0097 +  2.4622) + 7.36/300)), 5, 2, 0.003, 10, 10)//Larissa(nep3)
]

this.t = [
          (0.136 + 0.6371) + 38.44/300,//moon
          (0.34742 + 0.33895) + 0.938/300,//phtos(mar1)
          (0.062 + 0.33895) + 23.46/300,//deimos(mar2)

          (0.1815 + 6.991) + 42.16/300,//io(jup1)
          (0.1569 + 6.991) + 67.09/300,//europa(jup2)
          (0.2631 + 6.991) + 107/300,//ganimedes(jup3)

          (0.0196 + 5.823) + 18.85/300,//mimas(sat1)
          (0.0250 + 5.823) + 23.80/300,//encelado(sat2)
          (0.0530 + 5.823) + 29.46/300,//tetis(sat3)

          (0.05789 +  2.5362) + 19.12/300,//ariel(ura1)
          (0.05847 +  2.5362) + 26.59/300,//umbriel(ura2)
          (0.07889 +  2.5362) + 43.58/300,//titania(ura3)

          (0.135 +  2.4622) + 35.48/300,///Tritão(nep1)
          (0.021 +  2.4622) + 11.76/300,//Proteus(nep2)
          (0.0097 +  2.4622) + 7.36/300//Larissa(nep3)
]

function setup(){
  createCanvas(innerWidth, innerHeight, WEBGL);
  createEasyCam();
  document.oncontextmenu = function() { return false; }
}

function draw(){
  background(1)

  for(var i = 0; i < this.planets.length; i++){
    if(i == 0){       
      this.planets[i].setColor(255, 250, 0);
      this.planets[i].setWeight(2)
      this.planets[i].draw()
    }else{
      this.planets[i].setColor(0, 0, 255);
      this.planets[i].setWeight(2)
      this.planets[i].rotation3Dy(this.speed[i]);
      this.planets[i].draw()
    }
  }

  for(var j = 0; j < this.s.length; j++){
    this.s[j].setColor(255, 0, 0)
    this.s[j].setWeight(2)
    this.s[j].translate3D(-this.t[j], 0, 0)
    this.s[j].rotation3Dy(this.speedS[j])
    this.s[j].translate3D(this.t[j], 0, 0)
    this.s[j].draw()
  }
}
