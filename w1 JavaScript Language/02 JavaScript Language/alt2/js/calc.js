function getNumber(id) {
    return parseInt(document.getElementById(id).value);
}

function setResult(result) {
    document.getElementById("result").innerHTML = result;
}

function plus() {
    setResult(getNumber("firstValue") + getNumber("secondValue"));
}

function minu() {
    setResult(getNumber("firstValue") - getNumber("secondValue"));
}

function mult() {
    setResult(getNumber("firstValue") * getNumber("secondValue"));
}

function divi() {
    if (getNumber("firstValue") != 0 || getNumber("secondValue") != 0) {
        setResult(getNumber("firstValue") / getNumber("secondValue"));
    }
}