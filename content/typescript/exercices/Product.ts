class Product {
  constructor(
    public quantity: number,
    public name: string,
    public price: number
  ) {
    this.quantity = quantity;
    this.name = name;
    this.price = price;
  }
  showProduct() {
    console.log(`Product: ${this.name}, Price: ${this.price}`);
  }

  buy(quantity: number) {
    this.quantity = quantity;
    console.log(
      `You bought ${this.quantity} ${this.name} for the price of R$${
        this.price * this.quantity
      }`
    );
  }
}

let product1 = new Product(1, "Coca-Cola", 5);
product1.showProduct();
product1.buy(2);
product1.showProduct();
