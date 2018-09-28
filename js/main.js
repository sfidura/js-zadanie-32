var num1 = 2;
var num2 = 5;

function ktoraWieksza(param1, param2){
    if(param1 > param2){
        var wynik = param1;
    }
    else{
        wynik = param2;
    }
    
    return wynik;
}

console.log(ktoraWieksza(num1, num2));