import {createSlice } from "@reduxjs/toolkit";
const initialState = {
  CustomerModel: false,
 
};

const Store = createSlice({
  name: "user",
  initialState,

  reducers: {
    setOpenCustomerModel(state, action) {
      state.CustomerModel = action.payload;
    },
 
  },
});
export const StoreSlice = Store.reducer;
export const {
  setOpen,
  setCreate,

  setDialog,
  setGetData,
  setGetDataByID,
  setID,
  setTaps,
} = Store.actions;
