import React from "react";

interface TodoListItemProps {
  todo: {
    text: string;
    complete: boolean;
  };
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo: { text, complete },
}) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={complete} />
        {text}
      </label>
    </li>
  );
};
