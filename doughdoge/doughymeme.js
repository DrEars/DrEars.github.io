var game = new Phaser.Game(360,420);
console.log(game) 
class Boot {
  preload() {
    this.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = "true";
    this.scale.pageAlignVertically = "true";
  }
}

game.state.add("Boot",Boot);
game.state.start("Boot");