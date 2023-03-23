import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = {
    expenses: [],
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

            const updated = state.expenses.filter((item) => {
                return item.id !== action.payload
            });
            state.expenses = updated;
            console.log(state.expenses);
        }
    }

})

export const ExpenseActions = expenseSlice.actions;

export default expenseSlice.reducer;