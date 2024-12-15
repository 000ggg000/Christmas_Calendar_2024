const items = [
  {
    id: 1,
    name: "Christmas Candles",
    price: 1.75,
    categoryId: 1,
    inventory: 100,
  },
  {
    id: 2,
    name: "Santa Claus Hat",
    price: 0.25,
    categoryId: 1,
    inventory: 100,
  },
  { id: 3, name: "Ornaments", price: 1.0, categoryId: 1, inventory: 100 },
  { id: 4, name: "Stockings", price: 3.0, categoryId: 2, inventory: 100 },
  {
    id: 5,
    name: "Gingerbread House",
    price: 1.0,
    categoryId: 2,
    inventory: 100,
  },
  { id: 6, name: "Candy Canes", price: 5.75, categoryId: 3, inventory: 100 },
  { id: 7, name: "Elf Figurines", price: 4.0, categoryId: 3, inventory: 100 },
  { id: 8, name: "Snow Globes", price: 5.5, categoryId: 4, inventory: 100 },
];

let price;
function getItemPriceByName(name) {
  const item = items.find((item) => item.name === name);
  if (item) {
    price = item.price;
  } else {
    price = "Item not found";
  }
}

getItemPriceByName("Candy Canes");
console.log(price);
// --> 5.75

getItemPriceByName("Christmas Candles");
console.log(price);

getItemPriceByName("Santa Claus Hat");
console.log(price);

getItemPriceByName("Ornaments");
console.log(price);

getItemPriceByName("Stockings");
console.log(price);

getItemPriceByName("Gingerbread House");
console.log(price);

getItemPriceByName("Elf Figurines");
console.log(price);

getItemPriceByName("Snow Globes");
console.log(price);
