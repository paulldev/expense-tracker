import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://plantbasedking-e175d-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
