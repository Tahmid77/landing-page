var images = ["slider/1.png","slider/2.png","slider/3.png","slider/4.png"];

var img = document.querySelector("#slider img");

var count=0;

function next(){

    count++;
    if(count>=images.length){
        count=0;
        img.src = images[count];
    }
    else{
        img.src = images[count];
    }
    

}

function previous(){

    count--;
    if(count<0){
        count=3;
        img.src = images[count];
    }
    else{
        img.src = images[count];
    }
    
}