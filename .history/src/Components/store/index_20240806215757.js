import { configureStore } from '@reduxjs/toolkit';


import customerSlice from './Customers/customerSlice';


export default configureStore({
  reducer: {
    // auth: authSlice,
    // contracts: contractsSlice,
    customer: customerSlice,
    sharedStore: ShardModel,
    // employees: challengesSlice,
    // gallery: contentSlice,
    // permission: headerSlice,
    // storage: headerSlice
  },
});