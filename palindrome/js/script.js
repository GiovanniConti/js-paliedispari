
const userString = prompt("Inserisci una parola: ");
let revertString = "";

// revert user string
for(i= (userString.length - 1); i >= 0; i--){
    revertString = revertString + userString[i];

    console.log("Valore stringa durante il ciclo", revertString);
}

// compare the userString and the revertString and Display the result
if(userString === revertString){
    alert("La parola inserita è palindroma");
} else{
    alert("La parola inserita NON è palindroma");
}
