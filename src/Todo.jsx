import { useEffect, useState } from "react";
import "./Todo.css";
import { TodoForm } from "./componenets/TodoForm";
import { TodoList } from "./componenets/TodoList";
import { TodoDate } from "./componenets/TodoDate";

export const Todo = () => {
  const [task, setTask] = useState([]);
  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.includes(inputValue)) return;

    setTask((prevTask) => [...prevTask, inputValue]);
  };

  const handleDeleteTodo = (value) => {
    console.log(task);
    console.log(value);

    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };
  const handleClearTodoData = () => {
    setTask([]);
  };
  //
  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((curTask, index) => {
            return (
              <TodoList
                key={index}
                data={curTask}
                onHandleDeleteTodo={handleDeleteTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear All
        </button>
      </section>
    </section>
  );
};
