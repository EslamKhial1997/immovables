import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  CustomerModel: false,
  GalleryModel: false,
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
 
      
      state.SideBar = action.payload;
    },
    setOpenGallery(state, action) {
   
      
      state.GalleryModel = action.payload;
    },
  },
});
export default SharedModel.reducer;
export const { setOpenCustomerModel ,setOpenSideBar } = SharedModel.actions;
