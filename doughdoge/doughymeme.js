var game = new Phaser.Game(360,420);
console.log(game) 
class Boot {
  preload() {
    this.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = "true";
    this.scale.pageAlignVertically = "true";
  }
  create() {
    this.state.start("Load")
  }
}

class Load { 
  preload() { 
    console.log("Loading...............:3...");
  }
  create() {
    console.log("Loaded");
  }
}
game.state.add("Boot",Boot);
game.state.add("Load",Load);
game.state.start("Boot");
