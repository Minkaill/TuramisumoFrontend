import { configureStore } from "@reduxjs/toolkit"
import room from "../features/roomsTypes";
import userSlice from "../features/userSlice";
import chatUserAdmin from "../features/chatUserAdmin";
import productSlice from "../features/productSlice";
import cartSlice from "../features/cartSlice";
import tableSlice from "../features/tableSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    room,
    chatUserAdmin,
    products: productSlice,
    cart: cartSlice,
    table: tableSlice
  },
})