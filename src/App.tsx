import React from "react";
import { TodoListItem } from "./TodoListItem";

type Todo = {
  text: string;
  complete: boolean;
};

const todos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Write app", complete: false },
];

const App: React.FC = () => {
  return (
    <div>
      {todos.map((todo) => {
        <TodoListItem todo={todo} />;
      })}
    </div>
  );
};

export default App;
