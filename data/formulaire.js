"use strict";
console.log("Coucou le script formulaire est bien chargé");
document.querySelectorAll("ul.style a").forEach(a => {
    console.log("Je m'abonne au clique sur la balise", a);
    a.addEventListener("click", evt => {
        evt.preventDefault(); // empécher le traitement par défaut de l'évenement par le navigateur
        // Ne pas envoyer de requête HTTP ni changer la page...    
        console.log("on a cliqué sur", a);
        // On récupère la valeur de l'attribut href
        const href = a.getAttribute('href');
        if (!!href) { // Vrai si href est non null et non vide
            let cs = document.querySelector("#currentStyle");
            if (!cs) {
                cs = document.createElement("link");
                cs.setAttribute("id", "currentStyle");
                cs.setAttribute("rel", "stylesheet");
                document.head.appendChild(cs);
            }
            cs.setAttribute("href", href);
        }
        else { // on a choisi de débrancher la feuille de style
            document.querySelector("#currentStyle")?.remove();
        }
    });
});
