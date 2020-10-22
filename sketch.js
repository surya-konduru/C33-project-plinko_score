var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;
var particle;
var turn = 0;
var gameState = "PLAY";


var divisionHeight=300;
var score = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }
}
 


function draw() {
  background("black");
  textSize(20)
//  text("Score : "+score,20,30);
  Engine.update(engine);


  text("Score: " + score, 10, 20);
  text("500", 25, 500);
  text("500", 100, 500);
  text("500", 180, 500);
  text("500", 260, 500);
  text("100", 340, 500);
  text("100", 420, 500);
  text("500", 500, 500);
  text("500", 580, 500);
  text("500", 660, 500);
  text("500", 740, 500);

  if(turn === 10){
    gameState = "END";
    text("Game Over", 400, 250)
  }

   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }

  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //  }
   
 
  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
     updateScore(particles[j]);
   }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
}

if(mousePressed()) {
  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
}

function mousePressed() {
  if(gameState === "PLAY"){
  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  turn++
  }
}

function updateScore(p) {
  var pos = p.body.position;
  
  if (pos.y > 650 && pos.y < 660) {
    if (pos.x > 320 && pos.x < 480) {
      score = score + 100;
    } else {
      score = score + 500;
    }
  }
}