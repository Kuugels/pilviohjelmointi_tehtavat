function multiplyBy()
{
// check the input
    var number1 = document.getElementById("firstNumber").value;
    var number2 = document.getElementById("secondNumber").value;
    document.getElementById("result").textContent = number1 * number2;
}

function divideBy() 
{ 
// check the input
    var number1 = document.getElementById("firstNumber").value;
    var number2 = document.getElementById("secondNumber").value;
    if (number1 != 0 && number2 != 0)  {
        document.getElementById("result").textContent = number1 / number2;
    }else {
        document.getElementById("result").textContent = "ÄÄÄÄ ÄLÄ JAA NOLLALLA ÄÄÄÄÄÄ";
    }
 
}

