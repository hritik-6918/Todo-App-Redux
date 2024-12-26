import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo, editTodo } from './features/todoSlice';

function App() {
  const [task, setTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingText, setEditingText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask('');
    }
  };

  const handleEditTodo = (id, text) => {
    setEditingTaskId(id);
    setEditingText(text);
  };

  const handleSaveEdit = () => {
    if (editingText.trim()) {
      dispatch(editTodo({ id: editingTaskId, newText: editingText }));
      setEditingTaskId(null);
      setEditingText('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Redux To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddTodo}>Add Task</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {editingTaskId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={() => setEditingTaskId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => dispatch(toggleTodo(todo.id))}
                >
                  {todo.text}
                </span>
                <button onClick={() => handleEditTodo(todo.id, todo.text)}>Edit</button>
                <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;