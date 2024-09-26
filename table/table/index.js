let users = []

const handledata = (e) => {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('useremail').value;
    let password = document.getElementById('userpassword').value;
    let salary = document.getElementById('usersalary').value;

    let user = {
        username: username,
        email: email,
        password: password,
        salary: salary
    }

    users.push(user);
    console.log(users);
}

document.getElementById('userdata').addEventListener("submit", handledata)