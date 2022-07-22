//ajouter un membre de l'équipe

var template = document.getElementById('template');
var main = document.getElementsByClassName("main");

function duplicate() {
    var clone = template.cloneNode(true);
    clone.classList.remove("invisible");
    document.getElementById("fiches").appendChild(clone);
}

//retirer un membre de l'équipe en partant de la fin
function button_remove(){
    document.querySelector(".vierge:last-of-type").remove()
}