function changeTheColor(event){
    event.target.style.color = "red";
}

function init(){
    var k = document.getElementById("myEvent");
    k.addEventListener("click", changeTheColor);        
}

window.onload = init;