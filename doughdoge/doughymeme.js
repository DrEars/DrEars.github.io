var game = new Phaser.Game(360,420);
var game = new Phaser.Game(360,420);
var game = new Phaser.Game(360,420);
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
    this.load.image("Yes","assets/Yes.jpg");
  }
  create() {
    console.log("Loaded");
    this.state.start("Play");
  }
}

class Play {
  create() {
    console.log("Entered Play ");
    this.background = this.add.tileSprite(0,0,360,420,"Yes");
    this.background.autoScroll(0,999);
  }
} 
game.state.add("Boot",Boot);
game.state.add("Load",Load);
game.state.add("Play", Play);
game.state.start("Boot");
