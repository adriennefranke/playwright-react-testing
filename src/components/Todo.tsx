import React from 'react';

interface TodoProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
}

const Todo: React.FC<TodoProps> = ({ title, completed, onToggle }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        aria-label={`Mark ${title} as completed`}

      />
      <span className={`todo-item ${completed ? 'completed' : ''}`}>{title}</span>
    </div>
  );
};

export default Todo;