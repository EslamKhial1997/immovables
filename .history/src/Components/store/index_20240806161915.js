import { configureStore } from '@reduxjs/toolkit';



import authSlice from './auth/authSlice';
import categoriesSlice from "./categories/categoriesSlice";
import challengesSlice from "./challenges/challengesSlice";
import headerSlice from './header/headerSlice';
import contentSlice from './content/contentSlice';


export default configureStore({
  reducer: {
    auth: authSlice,
    contracts: cont,
    customer: categoriesSlice,
    employees: challengesSlice,
    gallery: contentSlice,
    permission: headerSlice,
    storage: headerSlice
  },
});