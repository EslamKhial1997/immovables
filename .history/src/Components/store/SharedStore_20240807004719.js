import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  CustomerModel: false,
  SideBar: true,
};

const SharedModel = createSlice({
  name: "Models",
  initialState,

  reducers: {
    setOpenCustomerModel(state, action) {
      state.CustomerModel = action.payload;
    },
    setOpenSideBar(state, action) {
      console.log();
      
      state.SideBar = action.payload;
    },
  },
});
export default SharedModel.reducer;
export const { setOpenCustomerModel ,setOpenSideBar } = SharedModel.actions;
