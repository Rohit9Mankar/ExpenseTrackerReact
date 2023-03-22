import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = {
    expenses: []
};

const expenseSlice = createSlice({
    name: 'expense',
    initialState: initialExpenseState,
    reducers: {
        addItem(state, action) {
            state.expenses.push(action.payload);
        },
        loadExpense(state, action) {
            state.expenses = action.payload;
        },
        removeItem(state, action) {
          
            state.expenses =  state.expenses.filter((item) => item._id === action.payload);
            console.log(state.expenses);
        }
    }

})

export const ExpenseActions = expenseSlice.actions;

export default expenseSlice.reducer;