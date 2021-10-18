const userString = prompt("Inserisci una parola: ");

let revertString = "";
let i = userString.length - 1;      // Take the length of the userString and set it number of iterations

console.log("Valore i prima del ciclo", i);

// revert user string
while(i >= 0){
    revertString = revertString + userString[i];
    i--;

    console.log("Valore stringa durante il ciclo", revertString);
}

// compare the userString and the revertString and Display the result
if(userString === revertString){
    alert("La parola inserita è palindroma");
} else{
    alert("La parola inserita NON è palindroma");
}
