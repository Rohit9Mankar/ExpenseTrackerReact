import {  configureStore } from "@reduxjs/toolkit";
import expenseReducer from './ExpenseSlice';
import authReducer from './AuthSlice';

const store = configureStore({
    reducer:{auth : authReducer, expense :expenseReducer}
});

export default store;