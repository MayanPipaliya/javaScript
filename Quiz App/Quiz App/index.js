import Navbar from "./components/nav.js";


document.getElementById("Navbar").innerHTML = Navbar();

const Handlesubmit = (e) => {
    e.preventDefault();

    const Questions = {
        que : document.getElementById("que").value,
        mcq1 : document.getElementById("mcq1").value,
        mcq2 : document.getElementById("mcq2").value,
        mcq3 : document.getElementById("mcq3").value,
        mcq4 : document.getElementById("mcq4").value,
        ans : document.getElementById("ans").value,
    }

    console.log(Questions); 
}
document.getElementById("form").addEventListener("submit", Handlesubmit);