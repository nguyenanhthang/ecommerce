import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductState {
    CartProduct: any;
    totalQuantity: number;
    totalAmount: number;
}
const getCartSession: any = sessionStorage.getItem('listCart') !== null ? sessionStorage.getItem('listCart') : [] ;
//const getDataCart = JSON.parse(getCartSession);
const initialState: ProductState = {
    CartProduct: getCartSession,
    totalQuantity: 0,
    totalAmount: 0
};

export const productSlice = createSlice({
    name: 'addProduct',
    initialState,
    reducers: {
        addCart: (state, action: PayloadAction<any>) => {
            state.CartProduct.push(action.payload);
            sessionStorage.setItem('listCart', JSON.stringify(state.CartProduct));
        }
    }
});

export const { addCart } = productSlice.actions;

export default productSlice.reducer;
