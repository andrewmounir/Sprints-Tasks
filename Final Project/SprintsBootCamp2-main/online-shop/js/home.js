const counters = {
  cartCounter: 0,
  loveCounter: 0
};
//`cartCounter_id`

// let countersJson = JSON.stringify(counters);
// localStorage.setItem("counters", countersJson);

(function () {
 

  // console.log(0);
  // for navbar list categories
  const jsPromise = async () => {
    const message = await fetch("http://localhost:5000/api/categories/");

    try {
      const jsonData = await message.json();

      let list = "";
      jsonData.data.forEach((element) => {
        list += `<a data-id="${element._id}" onclick="getCities(${element._id})" href="products.php?cat_id=${element._id}" class="nav-item nav-link">${element.name}</a>`;
      });
      document.getElementById("categories-menu").innerHTML = list;
    } catch (e) {
      console.log(`ooops`);
    }
  };
  // categories Section
  const jsPromise2 = async () => {
    const message = await fetch("http://localhost:5000/api/categories/");
    const jsonData = await message.json();

    try {
      let list = "";

      for (let i = 0; i < 4; i++) {
        list += ` <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a class="text-decoration-none" href="">
          <div class="cat-item d-flex align-items-center mb-4">
            <div class="overflow-hidden" style="width: 100px; height: 100px">
              <img class="img-fluid" src="${jsonData.data[i].image}" alt="" />
            </div>
            <div class="flex-fill pl-3" >
              <h6>${jsonData.data[i].name}</h6>
              <small class="text-body">${jsonData.data[i].productCount}</small>
            </div>
          </div>
        </a>
        </div>`;
      }

      document.getElementById("cat-div").innerHTML = list;
    } catch {}
  };

  const jsPromise3 = async () => {
    const message = await fetch(
      "http://localhost:5000/api/products/getFeatured"
    );
    const jsonData = await message.json();

    try {
      let list = "";

      for (let i = 0; i < 8; i++) {
        list += `   <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
              <div class="product-item bg-light mb-4">
                <div class="product-img position-relative overflow-hidden">
                  <img class="img-fluid w-100" src="${
                    jsonData.data[i].image
                  }" alt="" />
                  <div class="product-action">
                    <button  type="button" onClick="sayHello()"class="btn btn-outline-dark btn-square" href=""
                      ><i class="fa fa-shopping-cart"></i
                    ></button>
                    <a class="btn btn-outline-dark btn-square" href=""
                      ><i class="far fa-heart"></i
                    ></a>
                    <a class="btn btn-outline-dark btn-square" href=""
                      ><i class="fa fa-sync-alt"></i
                    ></a>
                    <a class="btn btn-outline-dark btn-square" href=""
                      ><i class="fa fa-search"></i
                    ></a>
                  </div>
                </div>
                <div class="text-center py-4">
                  <a class="h6 text-decoration-none text-truncate" href=""
                    >${jsonData.data[i].name}</a
                  >
                  <div
                    class="d-flex align-items-center justify-content-center mt-2"
                  >
                    <h5>${
                      jsonData.data[i].price -
                      jsonData.data[i].price * jsonData.data[i].discount
                    }</h5>
                    <h6 class="text-muted ml-2"><del>${
                      jsonData.data[i].price
                    }</del></h6>
                  </div>
                  <div
                    class="d-flex align-items-center justify-content-center mb-1"
                  >
                    <small class="fa fa-star text-primary mr-1"></small>
                    <small class="fa fa-star text-primary mr-1"></small>
                    <small class="fa fa-star text-primary mr-1"></small>
                    <small class="fa fa-star-half-alt text-primary mr-1"></small>
                    <small class="far fa-star text-primary mr-1"></small>
                    <small>(${jsonData.data[i].rating_count})</small>
                  </div>
                </div>
                </div>
              </div>`;
      }

      document.getElementById("products").innerHTML = list;
    } catch {}
  };

  const jsPromise4 = async () => {
    const message = await fetch("http://localhost:5000/api/products/getRecent");
    const jsonData = await message.json();

    try {
      let list = "";

      for (let i = 0; i < 8; i++) {
        list += `  <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div class="product-item bg-light mb-4">
          <div class="product-img position-relative overflow-hidden">
            <img class="img-fluid w-100" src="${
              jsonData.data[i].image
            }" alt="" />
            <div class="product-action">
              <a class="btn btn-outline-dark btn-square" href=""
                ><i class="fa fa-shopping-cart"></i
              ></a>
              <a class="btn btn-outline-dark btn-square" href=""
                ><i class="far fa-heart"></i
              ></a>
              <a class="btn btn-outline-dark btn-square" href=""
                ><i class="fa fa-sync-alt"></i
              ></a>
              <a class="btn btn-outline-dark btn-square" href=""
                ><i class="fa fa-search"></i
              ></a>
            </div>
          </div>
          <div class="text-center py-4">
            <a class="h6 text-decoration-none text-truncate" href=""
              >${jsonData.data[i].name}</a
            >
            <div
              class="d-flex align-items-center justify-content-center mt-2"
            >
              <h5>${
                jsonData.data[i].price -
                jsonData.data[i].price * jsonData.data[i].discount
              }</h5>
              <h6 class="text-muted ml-2"><del>${
                jsonData.data[i].price
              }</del></h6>
            </div>
            <div
              class="d-flex align-items-center justify-content-center mb-1"
            >
              <small class="fa fa-star text-primary mr-1"></small>
              <small class="fa fa-star text-primary mr-1"></small>
              <small class="fa fa-star text-primary mr-1"></small>
              <small class="fa fa-star text-primary mr-1"></small>
              <small class="fa fa-star text-primary mr-1"></small>
              <small>(${jsonData.data[i].rating_count})</small>
            </div>
          </div>
        </div>
      </div>`;
      }

      document.getElementById("recent-div").innerHTML = list;
    } catch {}
  };
  jsPromise();
  jsPromise2();
  jsPromise3();
  jsPromise4();
})();
//cart button function


if (localStorage.getItem(`counters`) == null) {
  let countersJson = JSON.stringify(counters);
  localStorage.setItem("counters", countersJson);
} else {
  let counterObj = JSON.parse(localStorage.getItem("counters", counters));
  document.getElementById(`cartCounter_id`).innerHTML =
    counterObj.cartCounter;
}
let sayHello = function () {
  JSON.parse(localStorage.getItem("counters",counters.cartCounter))++;
  // Save Code
  let countersJson = JSON.stringify(counters);
  localStorage.setItem("counters", countersJson);


  counterObj = JSON.parse(localStorage.getItem("counters", counters));
  document.getElementById(`cartCounter_id`).innerHTML =
      counterObj.cartCounter;
  //
};

const products = [
  {
    _id: "1",
    name: "Product 1",
    price: 100,
    discount: 0.1,
    image: "",
    rating: 3.5,
    rating_count: 100
  },
  {
    _id: "2",
    name: "Product 2",
    price: 150,
    discount: 0.1,
    image: "",
    rating: 3.5,
    rating_count: 100
  },
  {
    _id: "3",
    name: "Product 3",
    price: 80,
    discount: 0.1,
    image: "",
    rating: 3.5,
    rating_count: 100
  },
  {
    _id: "1",
    name: "Product 1",
    price: 100,
    discount: 0.1,
    image: "",
    rating: 3.5,
    rating_count: 100
  }
];

class Product {
  id;
  name;
  price;
  discount;
  image;
  rating;
  rating_count;
  constructor(obj) {
    this.id = obj._id;
    this.name = obj.name;
    this.price = obj.price;
    this.discount = obj.discount;
    this.rating = obj.rating;
    this.rating_count = obj.rating_count;
  }

  getPriceAfterDiscount() {
    return this.price - this.price * this.discount;
  }

  getRatingHTML() {
    return `<div class="d-flex align-items-center justify-content-center mb-1">
    <small class="fa fa-star text-primary mr-1"></small>
    <small class="fa fa-star text-primary mr-1"></small>
    <small class="fa fa-star text-primary mr-1"></small>
    <small class="fa fa-star text-primary mr-1"></small>
    <small class="fa fa-star text-primary mr-1"></small>
    <small>(99)</small>
  </div>`;
  }

  getHomeHTML() {
    return `<div class="col-lg-3 col-md-4 col-sm-6 pb-1">
    <div class="product-item bg-light mb-4">
      <div class="product-img position-relative overflow-hidden">
        <img class="img-fluid w-100" src="${this.image}" alt="">
        <div class="product-action">
          <a class="btn btn-outline-dark btn-square" href="#" onclick=""><i class="fa fa-shopping-cart"></i></a>
          <a class="btn btn-outline-dark btn-square" href="#"><i class="far fa-heart"></i></a>
          <a class="btn btn-outline-dark btn-square" href="#"><i class="fa fa-sync-alt"></i></a>
          <a class="btn btn-outline-dark btn-square" href="#"><i class="fa fa-search"></i></a>
        </div>
      </div>
      <div class="text-center py-4">
        <a class="h6 text-decoration-none text-truncate" href="">Product Name Goes Here</a>
        <div class="d-flex align-items-center justify-content-center mt-2">
          <h5>$${this.getPriceAfterDiscount()}</h5>
          <h6 class="text-muted ml-2"><del>$${this.price}</del></h6>
        </div>
        <div class="d-flex align-items-center justify-content-center mb-1">
          ${this.getRatingHTML()}
        </div>
      </div>
    </div>
  </div>`;
  }

  getHTML() {
    return ``;
  }
}

class CartLine {
  product;
  quantity;
  constructor(product, quantity = 1) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product.getPriceAfterDiscount() * this.quantity;
  }

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) this.quantity--;
  }
}

class Cart {
  cartlines;
  constructor(productsArray) {
    this.cartlines = [];
    //loop to add products into cartlines array
  }

  remove(productId) {}

  getTotal() {}

  getSubTotal() {}
}
//Cart
//CartLine
//Product
//Category
