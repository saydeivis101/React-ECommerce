export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

const cartPersistentState = (newState)=>{
  window.localStorage.setItem('cart', JSON.stringify(newState));
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  if (actionType == "ADD_TO_CART") {
    const productInCart = state.findIndex(
      (item) => item.id === actionPayload.id
    );

    if (productInCart >= 0) {
      const newState = structuredClone(state);
      newState[productInCart].quantity += 1;
      cartPersistentState(newState);
      return newState;
    }

    const newState = [
      ...state,
      {
        ...actionPayload,
        quantity: 1,
      },
    ];
    cartPersistentState(newState);
    return newState;
  }

  if (actionType == "REMOVE_FROM_CART") {
    const productInCart = state.findIndex(
      (item) => item.id === actionPayload.id
    );
    
    if (productInCart >= 0) {
      if (actionPayload.quantity == 1) {
        const newState = state.filter((item) => item.id != actionPayload.id);
        cartPersistentState(newState);
        return newState;
      }
      const newState = structuredClone(state);
      newState[productInCart].quantity -= 1;
      cartPersistentState(newState);
      return newState;
    }
    
   
  }
};
