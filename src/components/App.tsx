import React, { useState } from 'react';
import TodoList from './TodoList';

interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
}

const App: React.FC = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);

    const addTodo = (title: string) => {
        const newTodo: TodoItem = {
            id: todos.length + 1,
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id: number) => {
        const newTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>Todo App</h1>
            <input
                type="text"
                placeholder="What needs to be done?"
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.currentTarget.value) {
                        addTodo(e.currentTarget.value);
                        e.currentTarget.value = '';
                    }
                }}
            />
            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
    );
};

export default App;