let arr = localStorage.getItem("data") ? localStorage.getItem("data").split(';') : [];

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("Name").value;
  let price = document.getElementById("Price").value;
  let quantity = document.getElementById("Quantity").value;

  let data = name + ',' + price + ',' + quantity;

  arr.push(data);

  localStorage.setItem("data", arr.join(';'));

  ui();
});

function ui() {
  const div = document.getElementById("data");
  div.innerHTML = '';

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i].split(',');
    let name = item[0];
    let price = item[1];
    let quantity = item[2];

    let newDiv = document.createElement("div");
    newDiv.innerHTML = `'${name}'<br>Name: ${name}<br>Price: ${price}<br>Quantity: ${quantity}`;
    div.appendChild(newDiv);
  }
}
ui();