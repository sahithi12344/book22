class Form {
    constructor (){
        this.input = createInput("Name");
        this.button = createbutton('Play');
        this.greeting = createElememt('h4');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = cretaeElement('h3');
        title.html("world of book");
        title.position(130,0);

        this.input.position(130, 160);
        this.button.position(250,200);

        this.button.mousePressed(()=>{
this.input.hide();
this.button.hide();
this.greeting.html("HELLLO ");
this.greeting.position(130,100);
        })
    }
}