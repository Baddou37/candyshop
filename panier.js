// récuperer le formulaire
let form = document.getElementById('form');

// récupérer de tous les données d'entrée du formulaire
let arlequin = document.getElementById('arlequin')
let licorne = document.getElementById('licorne')
let chamallows = document.getElementById('chamallows')
let goldbears = document.getElementById('goldbears')
let malabar = document.getElementById('malabar')
let werthers = document.getElementById('werthers')

let totalpa = document.getElementById('totalpa')
let totalpl = document.getElementById('totalpl')
let totalpc = document.getElementById('totalpc')
let totalpg = document.getElementById('totalpg')
let totalpm = document.getElementById('totalpm')
let totalpw = document.getElementById('totalpw')

let total_panier = document.getElementById('total_panier')
let total_selection = document.getElementById('total_selection')
let montant_reduc = document.getElementById("montant_reduc")
let reduc = document.getElementById("reduc")
let montant_reduction = document.getElementById('montant_reduction')

//Déclaration et initialisation des variables affichées dans le panier
let prixSelection = 0
let montant_fdp = 0

//Fonction qui permet de calculer l'ensemble du panier en fonction des saisies et des cliques
function calcul() {
    //récupération des prix et quanités pour calculer le sous total
    let pa = arlequin.value * document.getElementById('prix_arlequin').innerHTML;
    let pl = licorne.value * document.getElementById('prix_licorne').innerHTML;
    let pc = chamallows.value * document.getElementById('prix_chamallows').innerHTML;
    let pg = goldbears.value * document.getElementById('prix_goldbear').innerHTML;
    let pm = malabar.value * document.getElementById('prix_malabar').innerHTML;
    let pw = werthers.value * document.getElementById('prix_werthers').innerHTML;
//Affichage du sous total par ligne sur la page panier
    totalpa.innerHTML = (pa).toFixed(2) +'<span> €</span>'
    totalpl.innerHTML = (pl).toFixed(2) +'<span> €</span>'
    totalpc.innerHTML = (pc).toFixed(2) +'<span> €</span>'
    totalpg.innerHTML = (pg).toFixed(2) +'<span> €</span>'
    totalpm.innerHTML = (pm).toFixed(2) +'<span> €</span>'
    totalpw.innerHTML = (pw).toFixed(2) +'<span> €</span>'
//    
    prixSelection = pa+pl+pc+pg+pm+pw;
    let total_ttc_selection = (pa+pl+pc+pg+pm+pw)*1.2;
    let montant_tva = prixSelection * 0.2
    total_selection.innerHTML = '<span> ' +(total_ttc_selection).toFixed(2)+ ' € dont ' + (montant_tva).toFixed(2) + '€ de TVA (20%)</span>'
   
    if (prixSelection == 0) {
        montant_fdp=0
        fdp.innerHTML = ""
        }
    else if (total_ttc_selection < 100) {
        montant_fdp=5
        fdp.innerHTML = "5 €"
    }
    else {
        montant_fdp=0
        fdp.innerHTML = "OFFERT"
        } 
        
    let montant_tva_2 = (montant_fdp+prixSelection)*0.2

    total = '<span> ' +((montant_fdp+prixSelection)*1.2).toFixed(2)+ ' € dont ' + (montant_tva_2).toFixed(2) + '€ de TVA (20%)</span>'
    total_panier.innerHTML=total

    //let tva = prixSelection

    document.querySelector("#button_reduc").addEventListener("click",function(){
        if (reduc.value == "CEFIM2022") {
            let reduction = (montant_tva_2).toFixed(2)
            montant_reduc.innerHTML = '<span>' + '- '+ reduction +' €' + '</span>'
            montant_reduction.innerHTML = '<div>Vous ne réglerez que ' +((prixSelection+montant_fdp)).toFixed(2)+'€</div>'
        }
        else if (!reduc.value) {
            montant_reduc.innerHTML = 'AUCUN CODE SAISIE'
        } 
        else {
            montant_reduc.innerHTML = 'CODE INVALIDE'
        }
    })
}

//Ecoute des changements qui ont lieu sur le formulaire et qui déclence la fonction calcul
form.addEventListener('change', () =>{
    calcul()
})

//Bouton de suppression des saisies de l'article de la ligne
//Bouton clear arlequin
document.querySelector("#resetArlequin").addEventListener("click",function(event){    
    event.preventDefault()
    document.querySelector("#arlequin").value=0
    totalpa.innerHTML = '0€'
    montant_reduction.innerHTML = ''
    montant_reduc.innerHTML = ''
    calcul()
})
//Bouton clear licorne
document.querySelector("#resetLicorne").addEventListener("click",function(event){
    event.preventDefault()
    document.querySelector("#licorne").value=0
    totalpl.innerHTML = '0€'
    calcul()
})
//Bouton clear chamallows
document.querySelector("#resetChamallows").addEventListener("click",function(event){
    event.preventDefault()
    document.querySelector("#chamallows").value=0
    totalpc.innerHTML = '0€'
    calcul()
})
//Bouton clear goldbear
document.querySelector("#resetGoldbear").addEventListener("click",function(event){
    event.preventDefault()
    document.querySelector("#goldbears").value=0
    totalpg.innerHTML = '0€'
    calcul()
})
//Bouton clear malabar
document.querySelector("#resetMalabar").addEventListener("click",function(event){
    event.preventDefault()
    document.querySelector("#malabar").value=0
    totalpm.innerHTML = '0€'
    calcul()
})
//Bouton clear werthers
document.querySelector("#resetWerthers").addEventListener("click",function(event){
    event.preventDefault()
    document.querySelector("#werthers").value=0
    totalpm.innerHTML = '0€'
    calcul()
})

//Vidange des saisies d'entrée
document.getElementById('button_clear').addEventListener('click',(event)=>{
    event.preventDefault()
    form.reset()
    totalpa.innerHTML = ''
    totalpl.innerHTML = ''
    totalpc.innerHTML = ''
    totalpg.innerHTML = ''
    totalpm.innerHTML = ''
    totalpw.innerHTML = ''
    reduc.innerHTML = ''
    fdp.innerHTML = ''
    total_panier.innerHTML = ''
    total_selection.innerHTML = ''
    montant_reduction.innerHTML = ''
    montant_reduc.innerHTML = ''
})