export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

// Action Creator
export const addToCart = (addedProduct) => {
    return {
        type : 'ADD_TO_CART',
        payload : addedProduct
    }
}

export const deleteFromCart = (id) => {
    return {
        type : 'DELETE_FROM_CART',
        payload : id
    }
}