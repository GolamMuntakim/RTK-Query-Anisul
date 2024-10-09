import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from '../features/products/productSlice'
import { productsApi } from '../services/productsApi'
import { setupListeners } from '@reduxjs/toolkit/query';


export const store = configureStore({
  reducer: {
    [productsApi.reducerPath] : productsApi.reducer,
    productsR : productSlice
  },
  middleware : (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(productsApi.middleware),
});
// setupListeners(store.dispatch)

