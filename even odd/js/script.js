
const userNumber = prompt("Inserisci un numero:");
const cpuNumber = Math.ceil(Math.random() * 5);

console.log(cpuNumber);

const sum = parseInt(userNumber) + cpuNumber;
console.log(sum)

if(isNaN(sum)){
    alert("VALORE INSERITO NON VALIDO.")
} else if(sum %2 === 0){
    alert("È uscito pari");
} else{
    alert("È uscito dispari");
}