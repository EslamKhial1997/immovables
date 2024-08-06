import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  CustomerModel: false,
};

const SharedModel = createSlice({
  name: "Models",
  initialState,

  reducers: {
    setOpenCustomerModel(state, action) {
      state.CustomerModel = action.payload;
    },
  },
});
export const StoreSlice = SharedModel.reducer;
export const { setOpenCustomerModel } = SharedModel.actions;
