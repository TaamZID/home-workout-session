const addToDb = (id) => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("practice-container");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("practice-container", JSON.stringify(shoppingCart));
};

const getStoredCart = () => {
  let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem("practice-container");
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
};

const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("practice-container");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("practice-container", JSON.stringify(shoppingCart));
    }
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("practice-container");
};

export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart };
