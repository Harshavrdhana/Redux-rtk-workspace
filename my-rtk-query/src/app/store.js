import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./service/dummyData";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer
  },

  //Only helping you with the caching
  middleware:(buildGetDefaultMiddleware)=> buildGetDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch)
 