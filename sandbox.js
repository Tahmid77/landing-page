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
let nav = document.querySelector(".nav-icon");
let body = document.querySelector("#nav-bar");

nav.addEventListener("click",function(){
    document.querySelector("#nav-bar").style.display = "flex";
})
body.addEventListener("click",function(){
    document.querySelector("#nav-bar").style.display = "none";
})