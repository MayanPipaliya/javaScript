class Book {
    #_author
    #_price
    #_rentalPrice
    #_copiesAvailable
    constructor(title, author, price, rentalPrice, copiesAvailable) {
        this.title = title;
        this.#_author = author;
        this.#_price = price;
        this.#_rentalPrice = rentalPrice;
        this.#_copiesAvailable = copiesAvailable;
    }

    details(){
        console.log(`title : ${this.title}`);
        console.log(`author : ${this.#_author}`);
        console.log(`price : ${this.#_price}`);
        console.log(`rentalprice : ${this.#_rentalPrice}`);
        console.log(`AvailableBooks : ${this.#_copiesAvailable}`);   
    }

    getauthor() {
        return this.#_author;
    }

    getprice() {
        return this.#_price;
    }
    
    getrentalPrice() {
        return this.#_rentalPrice;
    }

    getcopiesAvailable() {
        return this.#_copiesAvailable;
    }

    setcopiesAvailable(value) {
        if (value < 0) {
            console.log("Copies available cannot be negative.");
            return;
        }
        this.#_copiesAvailable = value;
    }

    buyBook() {
        if (this.#_copiesAvailable > 0) {
            this.#_copiesAvailable--;
            console.log(`You have purchased "${this.title}".`);
        } else {
            console.log(`Sorry, "${this.title}" is currently out of stock.`);
        }
    }

    rentBook() {
        if (this.#_copiesAvailable > 0) {
            this.#_copiesAvailable--;
            console.log(`You have Rented "${this.title}".`);
        } else {
            console.log(`Sorry, "${this.title}" is currently not available for rent`);
        }
    }

    returnBook() {
        this.#_copiesAvailable++;
        console.log(`You have returned "${this.title}".`);
    }

    checkAvailable() {
        console.log(`Copies of "${this.title}" available : ${this.#_copiesAvailable}`);
    }
}

let book1 = new Book("Rich Dad Poor Dad", "Robert Kiyosaki ", 399, 199, 5);

console.log(book1.details());

book1.checkAvailable();

book1.buyBook();
book1.checkAvailable();

book1.rentBook();
book1.checkAvailable();

book1.returnBook();
book1.checkAvailable();

book1.checkAvailable();