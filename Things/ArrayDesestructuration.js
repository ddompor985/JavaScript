//Supposed to be a form, case not Second name recieved, undefined , = ""
const fullName = ["Daniel", "Jesus", "Dominguez", "Porras"];
//const fullName = ["Daniel", "Dominguez", "Porras"]

function imprimirNombre(fullName) {
    const num = fullName.length;

    if (num > 3) {
        fullName.splice(1, 0, ""); 
        console.log(...fullName);
    } else {
        fullName.push(""); 
    }
}

imprimirNombre(fullName);
