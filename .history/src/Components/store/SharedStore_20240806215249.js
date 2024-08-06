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
  extraReducers: {
    [Auth.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [Auth.fulfilled]: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
    [Auth.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [createUsers.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [createUsers.fulfilled]: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
    [createUsers.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [getData.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    [getData.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [getDataByID.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getDataByID.fulfilled]: (state, action) => {
      state.dataById = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    [getDataByID.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [deleteUsers.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [deleteUsers.fulfilled]: (state, action) => {
      state.dataById = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    [deleteUsers.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [editUsers.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [editUsers.fulfilled]: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
    [editUsers.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [restNewPassword.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [restNewPassword.fulfilled]: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
    [restNewPassword.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
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