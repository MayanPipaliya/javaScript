document.addEventListener("DOMContentLoaded", () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    // if (!userData || userData.role !== "admin") {
    //     alert("You do not have permission to access this page.");
    //     window.location.href = "./index.html";
    // }
});

document.getElementById("addProductForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;

    const productData = {
        title: title,
        price: price,
        category: category,
    };

    const req = await fetch("https://json-server-9p5y.onrender.com/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
    });
    const res = await req.json();
    console.log("Product added successfully:", res);
});