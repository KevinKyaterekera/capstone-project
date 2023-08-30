import { uid } from "uid";
import TodoForm from "./ToDoForm";
import { useState } from "react";
import Todo from "./ToDo";

/* keep in mind, that this one has to be rendered somewhere */
export default function ToDoContainer() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uid(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };
  return (
    <>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo task={todo} key={index} />
      ))}
    </>
  );
}
/* reminder to style this task manager properly */
