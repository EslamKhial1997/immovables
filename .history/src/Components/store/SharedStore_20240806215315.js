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

    // setUserInfo(state, action) {
    //   state.userInfo = action.payload;
    // },
    // setApiUser(state, action) {
    //   state.api = action.payload;
    // },
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