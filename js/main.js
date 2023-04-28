let kitchenProducts = [
  {
    type: "grater",
    price: 10,
  },
  {
    type: "pastry-bag",
    price: 25,
  },
  {
    type: "scale",
    price: 5,
  },
  {
    type: "whisk",
    price: 15,
  },
];

let devicesProducts = [
  {
    type: "desktop",
    price: [100, 1000],
  },
  {
    type: "laptop",
    price: [50, 1500],
  },
  {
    type: "smartphone",
    price: [80, 2000],
  },
  {
    type: "tablet",
    price: [20, 1300],
  },
];

let cosmeticsProducts = [
  {
    type: "blush",
    price: 100,
  },
  {
    type: "eyeshadow",
    price: 50,
  },
  {
    type: "lipstick",
    price: 80,
  },
  {
    type: "nail-polish",
    price: 200,
  },
  {
    type: "perfume",
    price: 300,
  },
];

let Kitchen = { category: "kitchen" };
let Devices = { category: "devices" };
let Cosmetics = { category: "cosmetics" };

let modProducts = [];
let getProto = (arr, proto) => {
  return arr.map((products) => {
    let newProducts = Object.create(proto);
    for (let key in products) {
      newProducts[key] = products[key];
    }
    return newProducts;
  });
};

let arr = [
  getProto(kitchenProducts, Kitchen),
  getProto(devicesProducts, Devices),
  getProto(cosmeticsProducts, Cosmetics),
];

let renderall = [];
let newarr = [];

arr.forEach((element) => {
  element.map((obj) => {
    // console.log("🚀 ~ file: main.js:89 ~ element.map ~ obj:", obj);
    renderall.push(`
    <div class="category__box">
        <div class="category__img">
            <img src="img/${obj.type}.svg" alt=""/>
        </div>
        <div class="category_title">
            <p class="title__name">Name:
              <span>${obj.type}</span>
            </p>
            <p class="title__price">Price:
                <span>$${
                  Array.isArray(obj.price) === true
                    ? String(obj.price[0]) + String(obj.price[1])
                    : obj.price
                }</span>
            </p>
        </div>
    </div>
     `);
  });
});
let res = arr
  .map((row) => {
    return (
      `<div class="category"><h2>Category: ${row[0]?.category}</h2><div class="category__group">` +
      `${row
        .map(
          (box) => `
          <div class="category__box">
              <div class="category__img">
                  <img src="img/${box.category}/${box.type}.svg" alt=""/>
              </div>
              <div class="category__title">
                  <p class="title__name">Name:
                    <span>${box.type}</span>
                  </p>
                  <p class="title__price">Price:
                      <span>$${
                        Array.isArray(box.price) === true
                          ? String(box.price[0]) + "-" + String(box.price[1])
                          : box.price
                      }</span>
                  </p>
              </div>
          </div>`
        )
        .join("")}
      </div>
      </div>
        `
    );
  })
  .join("");
console.log("🚀 ~ file: main.js:112 ~ arr2:", res);

// Get the container element
let container = document.getElementById("container");

// Add the rendered HTML to the container element
container.innerHTML = res;
