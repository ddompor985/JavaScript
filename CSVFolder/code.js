console.log(clase);

document.querySelector("#container").innerHTML = clase;

function csvarray(csv, separator = ",") {
    let filas = csv.trim().split("\n");
    return filas.map(fila => fila.trim().split(separator));
}

let resultado = csvarray(csv);

let tbody = document.querySelector("#tabla tbody");
resultado.slice(1).forEach(row => {
    let tr = document.createElement("tr");
    row.forEach(cell => {
        let td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td); 
    });
    tbody.appendChild(tr);
});

let thead = document.querySelector("#tabla thead");
let headerRow = document.createElement("tr"); 
resultado[0].forEach(cell => {
    let th = document.createElement("th");
    th.textContent = cell;
    headerRow.appendChild(th); 
});
thead.appendChild(headerRow);
