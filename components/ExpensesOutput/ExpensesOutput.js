import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

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
    date: new Date("2021-07-07"),
  },
  {
    id: "e8",
    description: "Expense 8",
    amount: 88.88,
    date: new Date("2021-08-08"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
