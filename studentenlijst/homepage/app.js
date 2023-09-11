const data = JSON.parse(document.getElementById("data").innerHTML);
document.getElementById("data").innerHTML = "";

// render divs
const container = document.getElementById("studentvakcontainer");
for (let student in data) {

    let newcontainer = document.createElement("div");
    newcontainer.classList = "studentvak";

    let naam = "naamloos";
    if (data[student].tussenvoegsel) {
        naam = data[student].naam + " " + data[student].tussenvoegsel + " " + data[student].achternaam; ;
    }else {
        naam = data[student].naam + " " + data[student].achternaam; ;
    }

    let foto = document.createElement("div");
    foto.style.backgroundImage = `url(fotos/${data[student].achternaam}.png)`;
    foto.classList = "studentphoto";

    let text = document.createElement("div");
    text.innerHTML = naam;
    text.id = "studentname";

    const frame = generateSquare();

    container.appendChild(newcontainer);
    newcontainer.appendChild(foto);
    newcontainer.appendChild(frame);
    newcontainer.appendChild(text);
};
function generateSquare() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    const path1 = generatePath(1, 0);
    const path2 = generatePath(0, 1);
    const path3 = generatePath(-1, 0);
    const path4 = generatePath(0, -1);

    path.setAttribute("d", "M10 10 " + path1 + path2 + path3 + path4);

    svg.appendChild(path);
    return svg;
}
function generatePath(x, y) {
    const offsetPosition = 2;
    const offsetCurve = 5;

    const posX = 20 * x + (Math.random() - .5) * offsetPosition; 
    const posY = 20 * y + (Math.random() - .5) * offsetPosition;

    const cur1X = (Math.random() - .5) * offsetCurve; 
    const cur1Y = (Math.random() - .5) * offsetCurve; 

    const cur2X = posX + (Math.random() - .5) * offsetCurve; 
    const cur2Y = posY + (Math.random() - .5) * offsetCurve; 

    return `c${cur1X} ${cur1Y} ${cur2X} ${cur2Y} ${posX} ${posY}`;
}

// search bar
const searchInput = document.getElementById("search");
const recomendations = document.getElementById("recomendations");

// render search bar
searchInput.addEventListener("input", function() {
    const input = searchInput.value;
    recomendations.style.display = "block";

    recomendations.innerHTML = "";
    for (let student in data) {
        let displayName = true;

        for (let i = 0; i < input.length; i++) {
            if (input[i] !== student[i].toLowerCase()) {
                displayName = false;
                break;
            }
        }

        if (displayName) {
            const option = document.createElement("span");
            option.innerHTML = student;
            option.classList = "option";
            recomendations.appendChild(option);
            recomendations.innerHTML = recomendations.innerHTML + "<br>";
        }
    };
})
// hide search bar
const studentinfoContainer = document.getElementById("studentinfocontainer");
document.body.addEventListener("click", function(event) {
    if (event.target !== recomendations) {
        recomendations.style.display = "none";
    }
    studentinfoContainer.style.display = "none";

    if (event.target.classList[0] == "option") {
        openInfo(event.target.innerHTML);
    }
    if (event.target.parentNode.classList[0] == "studentvak") {
        openInfo(event.target.parentNode.lastChild.innerHTML);
    }
})

// student info
const foto = document.getElementById("studentphotobig")
const text = document.getElementById("studentinfo")
function openInfo(naam) {
    let achternaam = naam.split(" ");
    achternaam = achternaam[achternaam.length-1];
    const leerling = data[achternaam];

    studentinfoContainer.style.display = "grid";

    foto.style.backgroundImage = `url(fotos/${achternaam}.png)`;

    text.innerHTML = `${naam}<br>${leerling.studentnummer}<br>${leerling.telefoonnummer}<br>${leerling.email}`;
}