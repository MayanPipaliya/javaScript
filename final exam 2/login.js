document
.getElementById("loginForm")
.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const req = await fetch("https://json-server-9p5y.onrender.com/users");
  const users = await req.json();

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    localStorage.setItem("userData", JSON.stringify(user));
    alert("Login successful!");
    window.location.href = "./index.html";
  } else {
    alert("Invalid email or password.");
  }
});