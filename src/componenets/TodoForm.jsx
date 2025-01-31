import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, settInputValue] = useState("");
  const handleInputChange = (value) => {
    settInputValue(value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    settInputValue("");
  };

  return (
    <section className=" form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
