import { tableauNoms } from "./tableau.js";

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const inputTexte = document.getElementById("inputTexte");
let body = document.querySelector("body")
let resultat = document.getElementById("outputTexte");
let parentElement = document.getElementById("container3");
let nouvelElement = document.createElement("p");
let div = `
        <form>
            <label for="nom">nom</label>
            <input type="text" name="nom"id="nom" placeholder="Entrez votre nom">
            <label for="prenom">prenom</label>
            <input type="text name="prenom" id="prenom" placeholder="Entrez votre prénom">
        </form>
`


button1.addEventListener("click", function(){
    let valeurInput= inputTexte.value;
    if (valeurInput !== ""){
        if(valeurInput.length < 5){
            resultat.textContent = "Le texte doit contenir au moins 5 caractères.";
        } else {
            tableauNoms.push(valeurInput);
            resultat.textContent = valeurInput
            console.log(tableauNoms);
            button2.style.display = "block"; // afficher le bouton après le clic
        }
    } else { 
        resultat.textContent ="";
        resultat.textContent = "Veuillez entrer un texte dans le champ de saisie.";
    }
});
button2.addEventListener("click", function(){
    parentElement.innerHTML= "";
 for (let i = 0; i < tableauNoms.length; i++) {
    let nom = tableauNoms[i];
    let p = document.createElement("p");
    p.textContent =  nom.charAt(0).toUpperCase()+ nom.slice(1)+ ",";
    parentElement.appendChild(p);
    button2.style.display = "none";
  }
}); 