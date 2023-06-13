let products = [
  {
    id: 1212,
    Name: "Shoes",
    image: "./img/product-1.jpg",
    price: 200,
    quantity: 3
  },
  {
    id: 1212,
    Name: "watch",
    image: "./img/product-4.jpg",
    price: 300,
    quantity: 6
  },
  {
    id: 1212,
    Name: "lamp",
    image: "./img/product-3.jpg",
    price: 410,
    quantity: 1
  },
  {
    id: 1212,
    Name: "phone",
    image: "./img/product-6.jpg",
    price: 50,
    quantity: 2
  }
];

let list = " ";

products.forEach((element, index) => {
  list += ` <tr>
  <td class="align-middle">
    <img src="${element.image}" alt="" style="width: 50px" />
${element.Name}
 </td>
 <td class="align-middle">${element.price}$</td>
 <td class="align-middle">
   <div class="input-group quantity mx-auto" style="width: 100px">
     <div class="input-group-btn">
       <button type="button" onclick="decrementButton(${index})"  class="decBtn btn btn-sm btn-primary btn-minus">
         <i class="fa fa-minus"></i>
       </button>
     </div>
     <input type="Number" class="quantityVal form-control form-control-sm bg-secondary border-0 text-center"
       value=${element.quantity} />
     <div class="input-group-btn">
       <button type="button" onclick="incrementButton(${index})" class="incBtn btn btn-sm btn-primary btn-plus">
         <i class="fa fa-plus"></i>
       </button>
     </div>
   </div>
 </td>
 <td class="align-middle">${element.price * element.quantity}</td>
 <td class="align-middle">
   <button class="btn btn-sm btn-danger" onclick="deleteButton(${index})" type="button">
     <i class="fa fa-times"></i>
   </button>
 </td>
 </tr>`;
});

let incrementButton = function (i) {
  console.log(products[i].quantity);
  products[i].quantity += 1;
  console.log(products[i].quantity);
  renderTable();
};

let decrementButton = function (i) {
  products[i].quantity--;
  renderTable();
};

let deleteButton = function (i) {
  products.splice(i, 1);
  console.log(i);
  renderTable();
 
};

document.getElementById("products").innerHTML = list;

let renderTable = function () {
  if (products.length < 1) {
    return document.getElementById("products").innerHTML= "" ;
  }
  let list = "";
  console.log(`hello`);
  products.forEach((element, index) => {
    list += ` <tr>
  <td class="align-middle">
    <img src="${element.image}" alt="" style="width: 50px" />
${element.Name}
 </td>
 <td class="align-middle">${element.price}$</td>
 <td class="align-middle">
   <div class="input-group quantity mx-auto" style="width: 100px">
     <div class="input-group-btn">
       <button type="button" onclick="decrementButton(${index})"  class="decBtn btn btn-sm btn-primary btn-minus">
         <i class="fa fa-minus"></i>
       </button>
     </div>
     <input type="Number" class="quantityVal form-control form-control-sm bg-secondary border-0 text-center"
       value=${element.quantity} />
     <div class="input-group-btn">
       <button type="button" onclick="incrementButton(${index})" class="incBtn btn btn-sm btn-primary btn-plus">
         <i class="fa fa-plus"></i>
       </button>
     </div>
   </div>
 </td>
 <td class="align-middle">${element.price * element.quantity}</td>
 <td class="align-middle">
   <button onclick="deleteButton(${index})" class="btn btn-sm btn-danger" type="button">
     <i class="fa fa-times"></i>
   </button>
 </td>
 </tr>`;

    document.getElementById("products").innerHTML = list;
  });
};
