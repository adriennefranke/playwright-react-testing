import React from 'react';
import Todo from './Todo';

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: TodoItem[];
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          onToggle={() => toggleTodo(todo.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;