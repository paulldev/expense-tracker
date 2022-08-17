import { createContext, useReducer } from "react";

DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Expense 1",
    amount: 11.11,
    date: new Date("2021-01-01"),
  },
  {
    id: "e2",
    description: "Expense 2",
    amount: 22.22,
    date: new Date("2021-02-02"),
  },
  {
    id: "e3",
    description: "Expense 3",
    amount: 33.33,
    date: new Date("2021-03-03"),
  },
  {
    id: "e4",
    description: "Expense 4",
    amount: 44.44,
    date: new Date("2021-04-04"),
  },
  {
    id: "e5",
    description: "Expense 5",
    amount: 55.55,
    date: new Date("2021-05-05"),
  },
  {
    id: "e6",
    description: "Expense 6",
    amount: 66.66,
    date: new Date("2021-06-06"),
  },
  {
    id: "e7",
    description: "Expense 7",
    amount: 77.77,
    date: new Date("2022-08-15"),
  },
  {
    id: "e8",
    description: "Expense 8",
    amount: 88.88,
    date: new Date("2022-08-13"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
