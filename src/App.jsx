import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ ExpenseTable.jsx';
import SearchBar from './components/ SearchBar';
import './App.css';
export default function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      expensename: "Lunch",
      description: "Yesterday's Lunch",
      category: "Food",
      amount: 120,
      date: "2023-04-08",
    },
    {
      id: 2,
      expensename: "KPLC Tokens",
      description: "Power Tokens",
      category: "Utilities",
      amount: 2000,
      date: "2023-04-01",
    },
    {
      id: 3,
      expensename: "Buy Shoes",
      description: "Add to my shoe collection",
      category: "Personal",
      amount: 5000,
      date: "2023-04-05",
    },
    {
      id: 4,
      expensename: "Buy Book",
      description: "Add to my book collection",
      category: "Personal",
      amount: 1500,
      date: "2023-04-07",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, date: new Date().toISOString().split('T')[0] }]);
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const handleSort = (field) => {
    const isAsc = sortField === field && sortOrder === 'asc';
    setSortField(field);
    setSortOrder(isAsc ? 'desc' : 'asc');
  };

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (!sortField) return 0;
    const aValue = typeof a[sortField] === 'string' ? a[sortField].toLowerCase() : a[sortField];
    const bValue = typeof b[sortField] === 'string' ? b[sortField].toLowerCase() : b[sortField];
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    }
    return aValue < bValue ? 1 : -1;
  });

  const filteredExpenses = sortedExpenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.expenseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <div className="app">
        <div className="sidebar">
          <h2>Add Expense</h2>
          <ExpenseForm onAddExpense={addExpense} />
        </div>
        <div className="main-content">
          <h1>Expense Tracker</h1>
          <SearchBar onSearch={setSearchTerm} />
          <ExpenseTable
            expenses={filteredExpenses}
            onSort={handleSort}
            onDelete={deleteExpense}
          />
        </div>
      </div>
    </div>
  );
}