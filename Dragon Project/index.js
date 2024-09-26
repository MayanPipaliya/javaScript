let data = [];

const dataHandle = (e) => {
  e.preventDefault();
  let data_object = {
    img: document.getElementById("image").value,
    name: document.getElementById("name").value,
    price: Number(document.getElementById("price").value),
  };

  data.push(data_object);
  UI_Maker();
}

const UI_Maker = () => {
  document.getElementById("Product").innerHTML = "";
data.map((elem,i)=>{

  let img = document.createElement("img");
  img.src = elem.img;

  let name = document.createElement("name");
  name.innerHTML = elem.name;

  let price = document.createElement("price");
  price.innerHTML = "$" + elem.price;

  let buy = document.createElement("button");
  buy.innerHTML = "Buy";
  buy.addEventListener("click", () => {
    alert("buy successfully !!");
  });

  let del = document.createElement("button");
  del.innerHTML = "Delete";

  let div = document.createElement("div");
  div.className = "prooduct-container";

  div.append(img,name,price,buy,del);
  document.getElementById("Product").append(div);

  del.addEventListener("click", () => {
    data.splice(i, 1);
    UI_Maker();
  });

})
}
document.getElementById("form").addEventListener("submit", dataHandle);