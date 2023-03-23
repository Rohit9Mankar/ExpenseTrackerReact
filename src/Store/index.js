import {  configureStore } from "@reduxjs/toolkit";
import expenseReducer from './ExpenseSlice';
import authReducer from './AuthSlice';
import themeReducer from './ThemeSlice';

const store = configureStore({
    reducer:{auth : authReducer, expense :expenseReducer ,theme:themeReducer}
});

export default store;