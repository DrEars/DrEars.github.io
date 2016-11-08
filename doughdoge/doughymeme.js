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
    "frames": 1
  } 
} 
var game = new Phaser.Game(C.cyes.width,C.cyes.height);
var game = new Phaser.Game(C.cyes.width,C.cyes.height);
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
  }
} 
function restart() {
  game.state.start("Boot");
}
game.state.add("Boot",Boot);
game.state.add("Load",Load);
game.state.add("Play", Play);
game.state.start("Boot");
