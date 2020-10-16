//Operadores condicionales

let edad = 28

if(edad < 18){
    console.log("Ya eres mayor de edad.")
    masDe18 = false
}else{
    console.log("Salud")
    masDe18 = true
}

console.log(masDe18)

masDe18 = (edad < 18) ? false : true

console.log(masDe18)