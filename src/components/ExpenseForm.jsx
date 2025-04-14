import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [expenseName, setExpenseName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = expenseName && description && category && amount;
    if (isValid) {
      onAddExpense({
        expenseName,
        description,
        category,
        amount: parseFloat(amount),
      });

      // Clear form inputs
      setExpenseName('');
      setDescription('');
      setCategory('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Expense name</label>
        <input
          type="text"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Amount</label>
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;
