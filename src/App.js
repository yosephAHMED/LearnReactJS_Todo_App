import React from 'react';
import TodoItem from './components/TodoItem';

function App() {
    let checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    return(
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    );
}

export default App;