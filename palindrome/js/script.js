
const btn = document.getElementById("btn");

// added event listener to get the value of the userText at click and call the IsPalindrome function
btn.addEventListener("click", function(){
    const userText = document.getElementById("userText").value;
    // console.log(userText);
    // alert the return of IsPalindrome function
    alert(IsPalindrome(userText));
    
});


function IsPalindrome(userString){
    let revertString = "";
    let result;

    // revert user string
    for(i= (userString.length - 1); i >= 0; i--){
        revertString = revertString + userString[i];    
        // console.log("Valore stringa durante il ciclo", revertString);
    }
    
    // compare the userString and the revertString and return the value of result
    if(userString === revertString){
        result = "La parola inserita è palindroma";
    } else{
        result = "La parola inserita NON è palindroma";
    }
    return result;
}
