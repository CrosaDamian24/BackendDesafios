class ProductManager {
  #products;
  // #counter
  #error;

  constructor() {
    // this.#counter = 1
    this.#products = [];
    this.#error = undefined;
  }

  getProducts = () => this.#products;

  //Busqueda por ID
  getProductById = (id) => {
    const product = this.#products.find((item) => item.id === id);
    return !product ? "Not Found" : product;
  };

  //Busqueda por KEY
  getProductByKey = (value, key) => {
    const product = this.#products.filter((item) => item[key] === value);

    return product.length === 0 ? "Not Found" : product;
  };

  #generateId = () =>
    this.#products.length === 0
      ? 1
      : this.#products[this.#products.length - 1].id + 1;

  #validateProduct = (name, artist, code, price, thumbnail, stcok) => {
    if (!name || !artist || !code || !price || !thumbnail || !stcok) {
      this.#error = `[${name}]: campos incompletos`;
    } else {
      const found = this.#products.find((item) => item.code === code);

      this.#error = found ? `[${name}]: el code ya existe` : undefined;
    }
  };

  addProduct = (title, description, code, price, thumbnail, stcok) => {
    this.#validateProduct(title, description, code, price, thumbnail, stcok);
    this.#error === undefined
      ? this.#products.push({
          id: this.#generateId(),
          title: title,
          description: description,
          code,
          price,
          thumbnail,
          stcok,
        })
      : console.log(this.#error);
  };
}

const productManager = new ProductManager();
productManager.addProduct(
  "Postre Oreo",
  "Oreos, crema y dulce de leche",
  "10001",
  500,
  "https://d3ugyf2ht6aenh.cloudfront.net/stores/593/476/products/postre-oreo1-baebe795d818cd332016267243846221-640-0.png",
  50
);
productManager.addProduct("Postre Chocolinas", 80000);
productManager.addProduct(
  "Postre Toddy",
  "Galletitas toddy, dulce y crema",
  "10001",
  950,
  "https://lh6.googleusercontent.com/-0FLFbk4padM/VFVS1Q6fz8I/AAAAAAAAZFc/qIZhiLBfbRU/s640/blogger-image--229646297.jpg",
  8
);
productManager.addProduct(
  "Postre Balcarse",
  "Bizcochuelo, crema,  dulce de leche y duraznos",
  "10003",
  600,
  "https://d3ugyf2ht6aenh.cloudfront.net/stores/593/476/products/postre-oreo1-baebe795d818cd332016267243846221-640-0.png",
  6
);
// console.log(productManager.getProducts())
// console.log(productManager.getProductById(1))
// console.log(productManager.getProductById(4));
// console.log(productManager.getProductByKey(500, "price"));
