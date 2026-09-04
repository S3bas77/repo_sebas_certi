console.log("esto es un busca minas")

let tabla = document.querySelector?.<HTMLTableElement>(".buscaminas");
if(tabla){
    console.log(tabla?.tagName);
    console.log(tabla?.classList);
}
let celda = document.querySelector<HTMLTableCellElement>("td");
if(celda){
    console.log(celda.textContent);
}

let listaDeElementos = document.querySelectorAll("td");
for(const elemento of listaDeElementos){
    elemento.addEventListener( 'click', function(){
        console.log(elemento.textContent)
        console.log(elemento.classList.value);

        if(elemento.classList.contains("mina")){
            for(const item of listaDeElementos){
                item.textContent = "💥";
                item.style.color = "gray";
            }
        }
        elemento.style.color = "gray"; 
    })
    console.log(elemento.textContent);
}
