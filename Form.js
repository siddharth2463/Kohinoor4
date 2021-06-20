class Form{
    constructor(){
      this.input=createInput("name");
      this.button=createButton("enter");  
      this.greeting=createElement('h1');
      this.reset=createButton("reset");
      this.title=createElement('h1')

    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }

    display(){
        this.input.position(displayWidth/2,displayHeight/2)
        this.button.position(displayWidth/2,displayHeight/2+50)
        this.title.html("KOHINOOR");
        this.title.position(displayWidth/2, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(displayWidth-100, 50);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            if(player.index===1)
            player.x=displayWidth-200;
            if(player.index===2)
            player.x=200;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });
        this.reset.mousePressed(() => {
            database.ref("/").set({
                gameState:0,
                playerCount:0,players:null
            })
        })
    }
}