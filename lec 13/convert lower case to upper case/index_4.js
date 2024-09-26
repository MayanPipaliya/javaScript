const str = (e) => {
    e.preventDefault();
    let str = document.getElementById("uppercase").value;
    str = str.toUpperCase();
    document.getElementById("form_output").innerHTML = `${str}`;
  };
  
  document.getElementById("form_text").addEventListener("submit", str);