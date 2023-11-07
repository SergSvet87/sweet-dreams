import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
// import categoryReducer from "./category/categorySlice";
// import productReducer from "./product/productSlice";
// import orderReducer, { localStorageMiddleware } from "./order/orderSlice";
// import modalDeliveryReducer from "./modalDelivery/modalDeliverySlice.js";
// import formDeliveryReducer from "./formDelivery/formDeliverySlice.js";

export const store = configureStore({
  reducer: {
    login: userReducer,
    // category: categoryReducer,
    // product: productReducer,
    // order: orderReducer,
    // modalDelivery: modalDeliveryReducer,
    // formDelivery: formDeliveryReducer,
  },

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(localStorageMiddleware),
});
