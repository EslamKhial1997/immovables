import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  CustomerModel: false,
  SideBar: false,
};

const SharedModel = createSlice({
  name: "Models",
  initialState,

  reducers: {
    setOpenCustomerModel(state, action) {
      state.CustomerModel = action.payload;
    },
    setOpenSideBar(state, action) {
      state.CustomerModel = action.payload;
    },
  },
});
export default SharedModel.reducer;
export const { setOpenCustomerModel } = SharedModel.actions;
