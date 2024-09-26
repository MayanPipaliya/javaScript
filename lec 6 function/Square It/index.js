let squareNumber = () => {
   
    let number = document.getElementById("numberInput").value;


    let squaredNumber = number * number;

    document.getElementById('result').innerHTML=`${squaredNumber}`;
}
