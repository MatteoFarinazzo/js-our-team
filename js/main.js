// Array informazioni

let workers = [
    {
        img: `<img src="img/wayne-barnett-founder-ceo.jpg">`,
        name: "Wayne",
        surname: "Barrett",
        role: "Founder & Ceo",
    },

    {
        img: "img/angela-caroll-chief-editor copy.jpg",
        name: "Angela",
        surname: "Caroll",
        role: "Chief Editor",
    },

    {
        img: "img/walter-gordon-office-manager.jpg",
        name: "Walter",
        surname: "Gordon",
        role: "Office Manager",
    },

    {
        img: "img/angela-lopez-social-media-manager.jpg",
        name: "Angela",
        surname: "Lopez",
        role: "Social Media Manager",
    },

    {
        img: "img/scott-estrada-developer.jpg",
        name: "Scott",
        surname: "Estrada",
        role: "Developer",
    },

    {
        img: "img/barbara-ramos-graphic-designer.jpg",
        name: "Barbara",
        surname: "Ramos",
        role: "Graphic Designer",
    }

];

printArrayWorkers(workers);






//-------Funzioni-----


function printArrayWorkers(arrayWorkers) {
    for (let i = 0; i < arrayWorkers.length; i++) {

        let workers = arrayWorkers[i];

        printObject(workers);
        printHTML(workers);
    }
}



function printObject(object) {
    let string = "";

    string += "{\n";

    for (let key in object) {
        string += "\t " + key + ": " + object[key] + "\n";
    }

    string += "}";

    console.log(string);

}



function printHTML(object){
    let card = "";

    card += `<div class="square" > <p>`;

    for (let key in object) {
        card += "\t" + key + object[key] + "\n";
    }

    card += "</p>";

    document.getElementById("container_squares").innerHTML += card;


}

