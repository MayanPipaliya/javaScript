let users = []

let uimaker = () => {

    document.getElementById("tbody").innerHTML = ""
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement("tr")

        // sr no.
        let td = document.createElement("td")
        td.innerHTML = i + 1

        let td1 = document.createElement("td")
        td1.innerHTML = users[i].Employename
        let td2 = document.createElement("td")
        td2.innerHTML = users[i].email
        let td3 = document.createElement("td")
        td3.innerHTML = users[i].jobrole
        let td4 = document.createElement("td")
        td4.innerHTML = users[i].Expirienceyear

        // Level
        let td5 = document.createElement("td")
        if (users[i].Expirienceyear > 5) {
            td5.innerHTML = "Senior"
        } else {
            td5.innerHTML = "Junior"
        }

        let td6 = document.createElement("td")
        td6.innerHTML = users[i].salary

        tr.append(td, td1, td2, td3, td4, td5, td6)
        document.getElementById("tbody").append(tr)

    }
}

const handledata = (e) => {
    e.preventDefault();

    let Employename = document.getElementById('Employename').value;
    let email = document.getElementById('email').value;
    let jobrole = document.getElementById('jobrole').value;
    let Expirienceyear = document.getElementById('Expirienceyear').value;
    let salary = document.getElementById('salary').value

    let user = {
        Employename: Employename,
        email: email,
        jobrole: jobrole,
        Expirienceyear: Expirienceyear,
        salary: salary
    }

    users.push(user);
    console.log(users);
    uimaker();
}

document.getElementById('userdata').addEventListener("submit", handledata)