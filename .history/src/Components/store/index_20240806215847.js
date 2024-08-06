import { configureStore } from '@reduxjs/toolkit';


import customerSlice from './Customers/customerSlice';
import SharedStore from './SharedStore';


export default configureStore({
  reducer: {
    // auth: authSlice,
    // contracts: contractsSlice,
    customer: customerSlice,
    sharedStore: SharedStore,
    // employees: challengesSlice,
    // gallery: contentSlice,
    // permission: headerSlice,
    // storage: headerSlice
  },
});