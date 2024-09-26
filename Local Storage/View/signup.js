let data = JSON.parse(localStorage.getItem("data")) || [];

const  handledata = (e) => {

    e.preventDefault();

    let user ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }

    data.push(user);
    localStorage.setItem('user', JSON.stringify(data));
    alert("User SignUp successfully!");

    window.location.href = "login.html";
      
}
document.querySelector("#form").addEventListener("submit", handledata);