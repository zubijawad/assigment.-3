var model1 = document.getElementById("model1");

var speed = 5;

function model(takeOrder){
    if(takeOrder === "forward"){
        speed += 5;
        model1.style.left = speed + "px";
        model1.src = 'https://fightersgeneration.com/characters/asra-wn2.gif';
        
    }else if(takeOrder === "backward"){
        speed -= 5;
        model1.style.left = speed + "px";
        model1.src = 'https://fightersgeneration.com/characters/asra-cblock.gif';
    }
}

 function asra(event){
  console.log(event.key);
    if(event.key === "ArrowRight"){
        model("forward");  
    }else if(event.key === "ArrowLeft"){
        model("backward");
    }
}
window.addEventListener("keydown", asra);