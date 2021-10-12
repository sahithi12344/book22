class Screen{
    constructor(){

    }

    getScreen(){
    var getscreen1ref = database.ref('screen');
    getscreen1ref.on("value",function(data){
        screen = data.val();
    })
    }

    update(screen){
        database.ref('/').update({
            screen : screen 
        })
    }
    async start(){
        if(screen===0){
            contestant = new contestant()
        }
    }
    play(){
        form.hide();
        
    }
}