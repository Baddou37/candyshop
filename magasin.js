
//Déclaration et initialisation du panier des variables affichées dans le panier
let nombreArticles = 0;
let prixTotal = 0;
let panierNombreArticles = document.querySelector("#nombre-articles");
let panierPrixTotal = document.querySelector("#prix-total");
MiseAJourPanier();

//Récupération des quantités saisies pour chaque produit
let quantiteArlequin = document.querySelector("#quantite-arlequin");
let quantiteChamallow = document.querySelector("#quantite-chamallow");
let quantiteGoldbears = document.querySelector("#quantite-goldbears");
let quantiteLicorne = document.querySelector("#quantite-licorne");
let quantiteMalabar = document.querySelector("#quantite-malabar");
let quantiteOurson = document.querySelector("#quantite-ourson");
let quantiteWerthers = document.querySelector("#quantite-werthers");

//Déclaration des fonctions
function MiseAJourPanier() {
    if (nombreArticles == 1) {
        panierNombreArticles.innerHTML=nombreArticles+" article";
    } else if (nombreArticles > 1) {
        panierNombreArticles.innerHTML=nombreArticles+" articles";
    }
    else {
        panierNombreArticles.innerHTML="Panier vide";
    }
    panierPrixTotal.innerHTML=prixTotal.toFixed(2)+"€";
}

//Contrôle du click sur les boutons d'ajout au panier et calcul du nouveau prix et nombre d'articles
document.querySelector("#bouton-arlequin").addEventListener("click",function() { 
    prixTotal += quantiteArlequin.value*parseFloat(document.querySelector("#prix-arlequin").innerHTML);
    nombreArticles += parseFloat(quantiteArlequin.value);
    MiseAJourPanier();
});
document.querySelector("#bouton-chamallow").addEventListener("click",function() {
    prixTotal += quantiteChamallow.value*parseFloat(document.querySelector("#prix-chamallow").innerHTML);
    nombreArticles += parseFloat(quantiteChamallow.value);
    MiseAJourPanier();
});
document.querySelector("#bouton-goldbears").addEventListener("click",function () {
    prixTotal += quantiteGoldbears.value*parseFloat(document.querySelector("#prix-goldbears").innerHTML);
    nombreArticles += parseFloat(quantiteGoldbears.value);
    MiseAJourPanier();
})
document.querySelector("#bouton-licorne").addEventListener("click",function() {
    prixTotal += quantiteLicorne.value*parseFloat(document.querySelector("#prix-licorne").innerHTML);
    nombreArticles += parseFloat(quantiteLicorne.value); 
    MiseAJourPanier();
})
document.querySelector("#bouton-malabar").addEventListener("click",function() {
    prixTotal += quantiteMalabar.value*parseFloat(document.querySelector("#prix-malabar").innerHTML);
    nombreArticles += parseFloat(quantiteMalabar.value);
    MiseAJourPanier();
})
document.querySelector("#bouton-ourson").addEventListener("click",function() {
    prixTotal += quantiteOurson.value*parseFloat(document.querySelector("#prix-ourson").innerHTML);
    nombreArticles += parseFloat(quantiteOurson.value);
    MiseAJourPanier();
})
document.querySelector("#bouton-werthers").addEventListener("click",function() {
    prixTotal += quantiteWerthers.value*parseFloat(document.querySelector("#prix-werthers").innerHTML);
    nombreArticles += parseFloat(quantiteWerthers.value);
    MiseAJourPanier();
})
document.querySelector("#bouton-vider").addEventListener("click",function() {
    prixTotal = 0;
    nombreArticles = 0;
    MiseAJourPanier();
})