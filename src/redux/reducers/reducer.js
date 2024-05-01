const INIT_STATE = {
  cart: [],
};

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      // update
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      } else {
        // add
        const item = { ...action.payload, quantity: 1 };
        return {
          ...state,
          cart: [...state.cart, item],
        };
      }
    }
    case "REMOVE_FROM_CART": {
      console.log("remove reducer called");
      const itemIndex = state.cart.findIndex((item) => item.id === action.id);
      const item = state.cart[itemIndex];
      // reduce quantity if more than 1 exist
      if (itemIndex >= 0 && item.quantity > 1) {
        state.cart[itemIndex].quantity -= 1;
        return {
          ...state,
          cart: [...state.cart],
        };
      } else {
        const cart = state.cart.filter((el) => el.id !== action.payload);
        return { ...state, cart };
      }
    }

    default:
      return state;
  }
};
