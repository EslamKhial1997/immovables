import {createSlice } from "@reduxjs/toolkit";
const initialState = {
  CustomerModel: false,
 
};

const Store = createSlice({
  name: "Models",
  initialState,

  reducers: {
    setOpenCustomerModel(state, action) {
      state.CustomerModel = action.payload;
    },
 
  },
});
export const StoreSlice = Store.reducer;
export const {
  setOpenCustomerModel,
} = Store.actions;
