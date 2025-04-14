import React from 'react';


const ExpenseTable = ({ expenses, onSort, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            Expense Name{' '}
            <button onClick={() => onSort('expenseName')}>Sort</button>
          </th>
          <th>
            Description{' '}
            <button onClick={() => onSort('description')}>Sort</button>
          </th>
          <th>
            Category{' '}
            <button onClick={() => onSort('category')}>Sort</button>
          </th>
          <th>Amount</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length > 0 ? (
          expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.expenseName}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount.toFixed(2)}</td>
              <td>{expense.date}</td>
              <td>
                <button onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6">Expenses not found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ExpenseTable;