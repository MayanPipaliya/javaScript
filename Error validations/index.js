const handledata = (e) => {
  e.preventDefault();

  let data = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    password: document.getElementById("password").value,
  };

  let usernamePattern = /^[A-Z][a-zA-Z0-9]{1,}$/;
  if (!usernamePattern.test(data.username)) {
    alert("Enter Valid Name , first letter always be capital !!");
    return;
  }

  let phoneNumberPattern = /^(?:\+91|91)?[6789]\d{9}$/;
  if (!phoneNumberPattern.test(data.number)) {
    alert(
      "Enter 10 digit Valid Number, and start with 6,7,8,9 !!"
    );
    return;
  }

  let passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordPattern.test(data.password)) {
    alert(
      "Password should be at least 8 characters long and include at least one letter, one number, and one special character."
    );
    triggerShake(form);
    return;
  }
};

document.getElementById("userdata").addEventListener("submit", handledata);
