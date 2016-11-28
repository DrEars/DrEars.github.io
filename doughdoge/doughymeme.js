var C = {
  "game":{
    "width": 360,
    "height": 420
  },
  "cyes":{
    "width": 360,
    "height": 420,
    "xspeed": 0, 
    "yspeed":6969,
    "Yes": "assets/Yes.jpg"
  },
  "p": {
    "file": "assets/Lenny_Face.png",
    "width": 31,
    "height": 31,
    "frames": 1,
    "startx": 180,
    "starty": 210
  } ,
  "e": { 
    "file": "assets/kek.png",
    "width": 40,
    "height": 64,
    "frames": 1,
    "startx": 200,
    "starty": 210
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
    this.player = this.add.sprite(C.p.startx,C.p.starty,"player");
    this.player.anchor.set(0.5,0.5);
    this.player.smoothed = false;
    this.player.scale.set(4.20);
    this.enemy = this.add.sprite(C.e.startx,C.e.starty,"enemy");
    this.enemy.anchor.set(0.5,0.5);
    this.enemy.smoothed = false;
    this.enemy.scale.set(24.0);
  }
  update() { 
    console.log("createCursorKeys() called.");
  }
}
function restart() {
  game.state.start("Boot");
}
game.state.add("Boot",Boot);
game.state.add("Load",Load);
game.state.add("Play", Play);
game.state.start("Boot");
