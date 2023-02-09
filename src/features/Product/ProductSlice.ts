import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductState {
    CartProduct: any;
    //totalQuantity: number;
    totalAmount: number;
}
const cartSession: any = sessionStorage.getItem('listCart');
const getCartSession = sessionStorage.getItem('listCart') !== null ? JSON.parse(cartSession) : [];
const cartAmount: any = sessionStorage.getItem('totalAmount');
const getTotalAmountSession: any = sessionStorage.getItem('totalAmount') !== null ? JSON.parse(cartAmount) : 0;
const setItemFunc = (item: any, totalAmount: number) => {
    sessionStorage.setItem('listCart', JSON.stringify(item));
    sessionStorage.setItem('totalAmount', JSON.stringify(totalAmount));
};
const initialState: ProductState = {
    CartProduct: getCartSession,
    totalAmount: getTotalAmountSession
};

export const productSlice = createSlice({
    name: 'addProduct',
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<any>) => {
            const newItem: any = action.payload;
            const validDateCart = state.CartProduct.find((product: any) => product.id === newItem.id);
            if (!validDateCart) {
                state.CartProduct.push({
                    id: newItem.id,
                    product_image: newItem.product_image,
                    product_name: newItem.product_name,
                    productPrice: newItem.productPrice,
                    quantity: newItem.quantity,
                    totalPrice: newItem.totalPrice
                });
            } else {
                validDateCart.quantity += newItem.quantity;
                validDateCart.totalPrice = Number(validDateCart.totalPrice) + Number(validDateCart.productPrice);
            }
            // if (validDateCart.quantity === validDateCart.stock) {
            //     return;
            // }
            state.totalAmount = state.CartProduct.reduce(
                (total: number, item: any) => total + Number(item.productPrice) * Number(item.quantity),
                0
            );
            setItemFunc(
                state.CartProduct.map((item: any) => item),
                state.totalAmount
            );
        },
        deleteCart: (state, action: PayloadAction<any>) => {
            const id: number = action.payload;
            const validDateCart = state.CartProduct.find((product: any) => product.id === id);
            const leftQuantity = 1;
            if (validDateCart.quantity === leftQuantity) {
                return;
            } else {
                validDateCart.quantity--;
                validDateCart.totalPrice = Number(validDateCart.totalPrice) - Number(validDateCart.productPrice);
            }
            state.totalAmount = state.CartProduct.reduce(
                (total: number, item: any) => total + Number(item.productPrice) * Number(item.quantity),
                0
            );
            setItemFunc(
                state.CartProduct.map((item: any) => item),
                state.totalAmount
            );
        },
        destroyCart: (state, action: PayloadAction<any>) => {
            const id: number = action.payload;
            const validDateCart = state.CartProduct.find((product: any) => product.id === id);
            if (validDateCart) {
                state.CartProduct = state.CartProduct.filter((product: any) => product.id !== id);
            }
            state.totalAmount = state.CartProduct.reduce(
                (total: number, item: any) => total + Number(item.productPrice) * Number(item.quantity),
                0
            );
            setItemFunc(
                state.CartProduct.map((item: any) => item),
                state.totalAmount
            );
        }
    }
});

export const { addCart, deleteCart, destroyCart } = productSlice.actions;

export default productSlice.reducer;
