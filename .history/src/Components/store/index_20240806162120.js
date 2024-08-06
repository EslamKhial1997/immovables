import { configureStore } from '@reduxjs/toolkit';



import authSlice from './auth/authSlice';
import categoriesSlice from "./categories/categoriesSlice";
import challengesSlice from "./challenges/challengesSlice";
import headerSlice from './header/headerSlice';
import contentSlice from './content/contentSlice';
import contractsSlice from './Contracts/contractsSlice';


export default configureStore({
  reducer: {
    // auth: authSlice,
    // contracts: contractsSlice,
    customer: ,
    // employees: challengesSlice,
    // gallery: contentSlice,
    // permission: headerSlice,
    // storage: headerSlice
  },
});