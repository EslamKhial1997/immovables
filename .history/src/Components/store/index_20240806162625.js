import { configureStore } from '@reduxjs/toolkit';


import customerSlice from './Customers/customerSlice';


export default ConfigureStore({
  reducer: {
    // auth: authSlice,
    // contracts: contractsSlice,
    customer: customerSlice,
    // employees: challengesSlice,
    // gallery: contentSlice,
    // permission: headerSlice,
    // storage: headerSlice
  },
});