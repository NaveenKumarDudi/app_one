import { ICart } from 'src/app/models/Cart';

export const addItemToCart = (cartItems: ICart [], itemToAdd: ICart) => {

    if (cartItems !== null) {
        const existingItem = cartItems.find(ele => ele.id === itemToAdd.id);
        if (existingItem) {
            return cartItems.map(cartItem => 
                cartItem.id === itemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            );
        }
    }
    if (cartItems === null) {
        return [{...itemToAdd, quantity: 1}];
    } 
    return [...cartItems, {...itemToAdd, quantity: 1}];
};

export const removeItemFromCart = (cartItems, itemToRemove: ICart) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === itemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
    }

    return cartItems.map(
        cartItem => 
            cartItem.id === itemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
};