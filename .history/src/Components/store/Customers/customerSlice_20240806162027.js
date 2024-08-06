import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/utils/axios";
import { filterRequest } from "@/utils/apiManager";

let initialState = {
  isLoading: false,
  data: [],
  itemsCount: 0,
  pages: 0,
  error: null,
};

export const getCustomer = createAsyncThunk(
  "customer/getCustomer",
  async (args, thunkApi) => {
    console.log(args);
    try {
      const { data } = await axios.get(
        `http://178.62.205.20:3006/api/v1/subcategory/${args}`
      );
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

export const createCustomer = createAsyncThunk(
  "customer/createCustomer",
  async (args, thunkApi) => {
    console.log(args);
    try {
      const { data } = await axios.post(
        `http://178.62.205.20:3006/api/v1/category/${args.id}/subcategory`,
        {
          title: args.values.title,

          image: args.values.image[0],
        },
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            "Customer-Type": "multipart/form-data",
          },
        }
      );
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

export const updateCustomer = createAsyncThunk(
  "customer/updateCustomer",
  async (args, thunkApi) => {
    try {
      const { data } = await axios.put(
        `http://178.62.205.20:3006/api/v1/subcategory/${args.id}`,
        {
          title: args.values.title,
        },
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            "Customer-Type": "multipart/form-data",
          },
        }
      );
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);
export const updateCustomerImage = createAsyncThunk(
  "customer/updateCustomerImage",
  async (args, thunkApi) => {
    console.log(args);
    try {
      const { data } = await axios.put(
        `http://178.62.205.20:3006/api/v1/subcategory/${args.id}`,
        {
          image: args.values.image[0],
        },
        {
          headers: {
            Accept: "application/json, text/plain, */*",
            "Customer-Type": "multipart/form-data",
          },
        }
      );
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

export const deleteCustomer = createAsyncThunk(
  "Customer/deleteCustomer",
  async (args, thunkApi) => {
    try {
      const { data } = await axios.delete(
        `http://178.62.205.20:3006/api/v1/subcategory/${args}`
      );
      return thunkApi.fulfillWithValue(data);
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data);
    }
  }
);

const CustomerSlice = createSlice({
  name: "Customer",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCustomer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCustomer.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.data = payload.data;
        state.itemsCount = payload.itemsCount;
        state.pages = payload.pages;
        state.error = null;
      })
      .addCase(getCustomer.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })

      .addCase(createCustomer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createCustomer.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        state.data.push(payload.Customer);
        state.itemsCount++;
        state.error = null;
      })
      .addCase(createCustomer.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })

      .addCase(updateCustomer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCustomer.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;
        state.error = null;
      })
      .addCase(updateCustomer.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })
      .addCase(updateCustomerImage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCustomerImage.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;
        state.error = null;
      })
      .addCase(updateCustomerImage.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      })

      .addCase(deleteCustomer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCustomer.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.data = payload.data;
        state.itemsCount--;
        state.error = null;
      })
      .addCase(deleteCustomer.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.msg;
      });
  },
});

export default CustomerSlice.reducer;
