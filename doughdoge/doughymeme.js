var C = {
  "game":{
    "width": 720,
    "height": 780
  },
  "cyes":{
    "width": 720,
    "height": 780,
    "xspeed": 0, 
    "yspeed":6969,
    "Yes": "assets/Yes.jpg"
    //"Yes": "assets/road.png"
  },
  "p": {
    "file": "assets/Dodgecar .png",
    //"file": "assets/Lenny_Face.png",
    "width": 10,
    //"width": 31,
    "height": 26,
    //"height": 31,
    //"frames": 1,
    "frames": 32,
    "startx": 350,
    "starty": 669,
    "speed": 10.420,
    "scale": 2.0
  } ,
  "e": { 
    "file": "assets/wall.png",
    //"file": "assets/kek.png",
    //"width": 40,
    "width": 40,
    //"height": 64,
    "height": 51,
    "frames": 1,
    "startx": 450,
    "starty": 10,
    "speed": 10,
    "scale": 12.0
  } 
}
var game = new Phaser.Game(C.cyes.width,C.cyes.height);
console.log(game) 
class Boot {
  preload() {
    this.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = "true";
    this.scale.pageAlignVertically = "true";
  }
  create() {
    this.state.start("Load");
  }
}

class Load { 
  preload() { 
    console.log("Loading...............:3...");
    //this.load.spritesheet("player",C.p.file,C.p.width,C.p.height,C.p.frames);
    this.load.image("cyes",C.cyes.Yes);
    this.load.image("enemy",C.e.file,C.e.width,C.e.height,C.e.frames);
    this.load.spritesheet("player",C.p.file,C.p.width,C.p.height,C.p.frames)
  }

  create() {
    console.log("Loaded");
    this.state.start("Play");
  }
}

class Play {
  create() {
    console.log("Entered Play ");
    this.background = this.add.tileSprite(0,0,C.cyes.width,C.cyes.height,"cyes");
    this.background.autoScroll(C.cyes.xspeed,C.cyes.yspeed);
    game.player = this.add.sprite(C.p.startx,C.p.starty,"player");
    game.player.animations.add("drive");
    game.player.animations.play("drive", c.p.frames,true);
    game.player.anchor.set(0.5,0.5);
    game.player.smoothed = true;
    game.player.scale.set(C.p.scale);
    this.enemies = game.add.group();
    for (var i = 0; i <6; i++) {
    var enemy = this.enemies.create(randInt(game.width), C.e.starty, "enemy"); 
    enemy.anchor.set(0.5,0.5);
    enemy.smoothed = false;
    enemy.scale.set(.1);
    }
    this.cursors = this.input.keyboard.createCursorKeys();
  }
  update() { 
    if (this.cursors.left.isDown) {
      game.player.x -= C.p.speed;
    }
    if (this.cursors.right.isDown) {
      game.player.x += C.p.speed;
    }
  this.enemies.forEach(function(enemy) {
    if (enemy.y > C.game.height) {
      enemy.y = C.e.starty
      enemy.x = randInt(C.game.width);
    }
   enemy.y += C.e.speed;
  
  if (checkOverlap(enemy, game.player))
    {
      restart()
  }
  });
  }
  render() {
    console.log("Play.render() debug.text()") 
    
  }
}

function checkOverlap(spriteA, spriteB){
  var boundsA = spriteA.getBounds();
  var boundsB = spriteB.getBounds();
  return Phaser.Rectangle.intersects(boundsA, boundsB);
}
function restart() {
  game.state.start("Boot");
}
function randInt(max) {
  return Math.floor(Math.random() * max);
}
game.state.add("Boot",Boot);
game.state.add("Load",Load);
game.state.add("Play", Play);
game.state.start("Boot");
