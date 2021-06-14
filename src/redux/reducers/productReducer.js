
const initialState = {
  currentUser: {},
  userDatabase: {},
  products: [],
  cart:{
      items: [],
      total: 0
  },
  orders: [],
  open: false
}

export const openCart = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_CART':
      return { ...state, open: !state.open }
    default:
      return state;

  }
}

export const currentUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_USER":
      return { ...state.currentUser, currentUser: payload }

    default:
      return state;
  }
}

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case "SET_USERS":
      return { ...state.userDatabase, userDatabase: payload }


    default:
      return state;
  }
};

export const logInReducer = (state = initialState.users, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return { ...state, users: payload };

    default:
      return state;
  }
};



export const logOutReducer = (state = initialState, { type }) => {
  switch (type) {
    case "LOGOUT":
      return { users: null };

    default:
      return state;
  }
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCTS":
      return { ...state, products: payload }

    default:
      return state
  }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case "SELECTED_PRODUCT":
      return {
        ...state,
        ...payload,
      };
    case "REMOVE_SELECTED_PRODUCT":
      return {};
    default:
      return state
  }
};

export const addProductReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      //let addedProduct = state.products.find(products => state.products.title === action.payload)

      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };
    }
    default: {
      return state;
    }
  }
}

export const totalReducer = (state= initialState.cart, action ) =>{
  switch(action.type){
    case 'CALC_TOTAL':{
             return{
                ...state,
                 total: state.total + action.payload

                  }
    }
        default: {
        return state;
    }
  }
}