import { configureStore } from '@reduxjs/toolkit';



import authSlice from './auth/authSlice';
import categoriesSlice from "./categories/categoriesSlice";
import challengesSlice from "./challenges/challengesSlice";
import headerSlice from './header/headerSlice';
import contentSlice from './content/contentSlice';
import contractsSlice from './Contracts/contractsSlice';
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