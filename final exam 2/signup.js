document.getElementById("signupForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;
    const profileImage = document.getElementById("profileImage").value;

    const userData = {
        name: name,
        email: email,
        password: password,
        role: role,
        profileImage: profileImage,
    };

    const req = await fetch("http://localhost:3000/users");
    const users = await req.json();
    console.log(users);

    const userExists = users.every((user) => user.email === email);
    console.log(userExists);

    if (userExists) {
        alert("Email already exists. Please use a different email.");
    } else {
        localStorage.setItem("userData", JSON.stringify(userData));

        const req = await fetch("https://json-server-9p5y.onrender.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        const res = await req.json();
        console.log("Success:", res);
    }
});