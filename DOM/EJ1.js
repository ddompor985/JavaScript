const elem = document.body;



//Número de enlaces

let iesBelen = (links) =>
{
    console.log("---->", links);
    let cont = 0;
    let nlinks = Array.from(links);
    nlinks.forEach(elem=>{
        cont = cont + (elem.getAttribute("href") === "https://iesbelen.org/" ? 1:0)

    });
    console.log(cont);
    return cont;
    
}


let iesBelen2 = (links) =>
    {
        console.log(document.querySelectorAll(a [href = "https://iesbelen.org/"]));
       
    }
    
