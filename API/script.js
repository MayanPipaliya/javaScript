const Getdata = async () => {
    let req = await fetch('https://dummyjson.com/products');
    let response = await req.json();
    console.log(response);

    mapper(response.products);
}

Getdata();

const mapper = (data) => {
    data.map((products) => {
        let div = document.createElement("div");

        let id = document.createElement("h3");
        id.innerHTML = products.id;

        let images = document.createElement("images");
        images.src = products.images;

        let title = document.createElement("h3");
        title.innerHTML = products.title;

        let price = document.createElement("h3");
        price.innerHTML = products.price;

        let category = document.createElement("h3");
        category.innerHTML = products.category;

        let rating = document.createElement("h3");
        rating.innerHTML = products.rating;

        div.append(id, images, title, price);
        document.getElementById("products").append(div);
    })
}
