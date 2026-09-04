const nombre = 'leonardo'

function mifuncion (name = nombre){
    console.log("hola desde la consola"+ " " + name || "sin nombre")
}

mifuncion("leonardo"); 
