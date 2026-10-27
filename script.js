import { tableauNoms } from "./tableau.js";

let monAge = 61
console.log(monAge);
let anneeDeNAissance = 1965

let monNom = "schiaratura ludovic"
console.log(monNom);

let alias = ", ludo"
console.log(alias);

                            //concaténation de variables

let monNomComplet = monNom + alias + " né en " + anneeDeNAissance + " et j'ai " + monAge + " ans"
console.log(monNomComplet);

                        //création d'un objet avec des propriétés et des valeurs

let ludo = {            
    nom: "schiaratura",
    prenom: "ludovic",
    age: 61,
    anneeDeNaissance: 1965,
    alias: "chgrand"
}
ludo.vehiculePrefere = "moto" //ajouter une propriete à un objet
ludo.proffession = "retraité"
console.log(ludo);

let monAlias= ludo.alias; //recupérer une propriété d'un obkjet et la stocker dans une variable
console.log(monAlias)

                        //création et gestion de tableaux

let maCollectionDeLivres = ["le seigneur des anneaux", "le hobbit", "le trone de fer", "la roue du temps","les guerriers du silence","le fléau"]

let monLivreDeChevet = maCollectionDeLivres[4] //recupérer un élément d'un tableau et le stocker dans une variable
console.log(monLivreDeChevet);
let nombreDeLivresDuTableau= maCollectionDeLivres.length; //recupérer le nombre d'éléments d'un tableau et le stocker dans une variable
console.log(nombreDeLivresDuTableau);
maCollectionDeLivres.push("le maintien de l 'ordre") //ajouter un élément à la fin d'un tableau
console.log(maCollectionDeLivres);

let livre = maCollectionDeLivres.find(maCollectionDeLivres => maCollectionDeLivres === "le hobbit") //rechercher un élément dans un tableau
console.log(livre);
console.log(tableauNoms);
tableauNoms.push("alfred"); //ajouter un élément à la fin d'un tableau
console.log(tableauNoms);

let tableauNoms2 = [...tableauNoms] //copier un tableau dans un autre tableau
console.log(tableauNoms2);

                        //les conditions
//let motTest = prompt("entrez un mot")
//if(motTest === "5"){
//    console.log("le mot est vrai")
//} else {
  //  console.log("le mot est faux")
//};

                        //les boucles
                         
let listeTexte = ["le livre","la table","la chaise","le meuble","la lampe","la cheminée","le fauteuil"]

                        //les deux facons de faire une boucle pour parcourir un tableau
let i=0
while(i<listeTexte.length){
   console.log(listeTexte[i]);
   i++
};

for(let liste = 0; liste < tableauNoms2.length; liste ++){
    console.log(tableauNoms2[liste]);
};

let baliseIndiceTexte= document.getElementById("indiceTexte")

console.log(baliseIndiceTexte);

                // ajouter un evenement sur un bouton pour recuperer la valeur d'un input et l'afficher dans la console

const entreeTexte= document.getElementById("inputTexte");
const button1= document.getElementById("button1");
const button2= document.getElementById("button2");
    

button1.addEventListener("click", function(){
    let valeurInput= entreeTexte.value
    console.log(valeurInput); 
});
button2.addEventListener("click", function(){
    inputTexte.value= "";
    let valeurInput= entreeTexte.value
    console.log(valeurInput); 
});