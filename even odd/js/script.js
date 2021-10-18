
const getUserNumber = document.getElementById("userNumber");
let userNumber;
let cpuNumber = Math.ceil(Math.random() * 5);
const btnEven = document.getElementById("even");
const btnOdd = document.getElementById("odd");

btnEven.addEventListener("click", function(){
    userNumber = getUserNumber.value;
    // console.log("Valore di userNumber",userNumber)

    alert(EvenorOdd(userNumber, cpuNumber, true));
});

btnOdd.addEventListener("click", function(){
    userNumber = getUserNumber.value;
    // console.log("Valore di userNumber",userNumber)
    
    alert(EvenorOdd(userNumber, cpuNumber, false))
});


function EvenorOdd(num1, num2, even){

    let sum = parseInt(num1) + num2;
    let result;
    
    // console.log("Valore di num1", num1);
    // console.log("Valore di num2", num2);
    // console.log("Valore di nim1 + num2", sum)
    if(num1 > 5){
        result ="NUMERO INSERITO NON VALIDO.";
    } else{
        if(sum %2 === 0){
            if(even == true){
                result = "HAI VINTO! È uscito pari";
            } else{
                result = "HAI PERSO! È uscito pari";
            }
        } else{
            if(even == true){
                result = "HAI PERSO! È uscito dispari.";
            } else{
                result = "HAI VINTO! È uscito dispari";
            }
        }
    }

    return result;
}