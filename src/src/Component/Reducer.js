const Reducer = (cart = [], action) => {
    if (action.type === "ADD"){
        let tempcart = cart.filter((product) => product.title === action.payload.title)
        if (tempcart<1){
            return [...cart, action.payload]
        }
        else{
            return cart;
        }
    }
    if (action.type === "REMOVE") {
        return cart.filter((product) => product.title !== action.payload.title)
    }
    if (action.type === "INCREASE") {
        let tempcart = cart.map((product) => {
          if (product.title === action.payload.title) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });
        return tempcart;
      }
    if (action.type === "DECREASE") {
        let tempcart = cart.map((product) => {
          if (product.title === action.payload.title) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        });
        return tempcart;
      }
    return cart
}

export default Reducer