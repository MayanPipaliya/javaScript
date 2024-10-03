document.addEventListener("DOMContentLoaded", async () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      document.getElementById("userImage").src = userData.profileImage;
      document.getElementById("userName").textContent = userData.name;
      document.getElementById("userEmail").textContent = userData.email;
    }

    const req = await fetch("http://localhost:3000/products");
    const products = await req.json();
    const productList = document.getElementById("productList");
    products.forEach((product) => {
      const li = document.createElement("li");
      li.textContent = `${product.title} - $${product.price} - ${product.category}`;
      productList.appendChild(li);
    });
  });