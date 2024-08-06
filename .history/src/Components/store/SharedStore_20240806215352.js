import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  create: false,
  isLoading: false,
  isError: false,
  tabs: 2,
  // userInfo: null,
  dialog: false,
  // extands: false,
  // target: null,
  // id: null,
  data: [],
  dataById: [],
  setGetDataByID: [],
};

const Store = createSlice({
  name: "user",
  initialState,

  reducers: {
    setOpen(state, action) {
      state.islLoading = action.payload;
    },
    setCreate(state, action) {
      state.create = action.payload;
    },
    setTaps(state, action) {
      state.tabs = action.payload;
    },
    setID(state, action) {
      state.id = action.payload;
    },

 
    setDialog(state, action) {
      state.dialog = action.payload;
    },
    setGetData(state, action) {
      state.getData = action.payload;
    },
    setGetDataByID(state, action) {
      state.setGetDataByID = action.payload;
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
