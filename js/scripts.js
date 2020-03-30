//let template = document.querySelector("#listeVoyage");
let template = document.getElementById("grid-template");

//récupération des données du fichier JSON

let destination;

fetch("http://127.0.0.1:5500/../json/data.json").then(function (resp) {
    resp.json().then(function (data) {
        for (const d of data) {					// itère sur le tableau
            let clone = document.importNode(template.content, true);      // clone le template

            newContent = clone.firstElementChild.innerHTML
                .replace(/{{image}}/g, d.image)		// remplace {{image}}
                .replace(/{{name}}/g, d.name)				// et {{name}} par
                .replace(/{{price}}/g, d.price);			// leur valeur

            clone.firstElementChild.innerHTML = newContent
            document.getElementById("grid-template").appendChild(clone);				// On ajoute le clone créé
        }
    })
})




