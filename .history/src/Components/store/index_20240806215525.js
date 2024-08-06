import { configureStore } from '@reduxjs/toolkit';


import customerSlice from './Customers/customerSlice';


export default configureStore({
  reducer: {
    // auth: authSlice,
    // contracts: contractsSlice,
    customer: customerSlice,
    customer: customerSlice,
    // employees: challengesSlice,
    // gallery: contentSlice,
    // permission: headerSlice,
    // storage: headerSlice
  },
});