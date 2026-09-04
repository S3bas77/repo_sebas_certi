console.log('hello world')
setTimeout(()=>{
    console.log('llegué tarde')
}, 2000)
console.log('fin')
const temporizador = setTimeout(()=> {
    console.log('nunca llegaré'); 
})
clearTimeout(temporizador)
console.log("cancelé el temporizador"); 


let segundos = 0; 
const reloj = setInterval(()=>{
    segundos = segundos + 1;
    console.log("segundos =" + segundos);
}, 1000)

console.log(reloj)
