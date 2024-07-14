export const Reducer = (state, action) => {
	switch (action.type) {
		case 'SET_PRODUCTS':
			return { ...state, products: action.payload };
		case 'SET_CART':
			return { ...state, cart: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
		case 'INCR_PROD_QTY_IN_CART':
			return {
				...state,
				cart: state.cart.map(prod =>
					prod.id === action.payload
						? { ...prod, qty: prod.qty + 1 }
						: prod
				),
			};
    case 'DECR_PROD_QTY_IN_CART':
      return {
        ...state,
        cart: state.cart.map(prod =>
          prod.id === action.payload
            ? { ...prod, qty: prod.qty > 1 ? prod.qty - 1 : 1 }
            : prod
        ),
      };
		case 'DEL_FROM_CART':
      return {...state, cart: state.cart.filter(prod => prod.id !== action.payload)}
    default: return state;
	}
};
