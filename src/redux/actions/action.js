export const ADD = (item) => {
  return { type: "ADD_TO_CART", payload: item };
};

export const REMOVE = (id) => {
  console.log("remove called", id);
  return { type: "REMOVE_FROM_CART", payload: id };
};
