function checkOddOrEven() {
    let number = document.getElementById("numberInput").value;

    if (number % 2 === 0) {
        document.getElementById("result").innerHTML = "It's an even number.";
    } else {
        document.getElementById("result").innerHTML = "It's an odd number.";
    }

}
