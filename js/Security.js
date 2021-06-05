class Security {

    constructor(){

     this.access1 = createInput("Code 1")
     this.access1.position(100,90)
     this.access1.style("background","white");

     this.button1 = createButton("check")
     this.button1.position(100,120)
     this.button1.style("background","lightgrey");
    
    }

    authenticate(actualCode,enteredCode){
        if(actualCode === enteredCode)
            return true
        else
            return false
    }

    display(){

    this.button1.mousePressed(() =>{
        if(system.authenticate(accesscode1,this.access1.value())){
            this.button1.hide();
            this.access1.hide();
            score++;
        }
    })


    }
}