import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, settInputValue] = useState({});

  const handleInputChange = (value) => {
    settInputValue({ id: value, content: value, checked: false });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    settInputValue({ id: "", content: "", checked: false });
  };

  return (
    <section className=" form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
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
