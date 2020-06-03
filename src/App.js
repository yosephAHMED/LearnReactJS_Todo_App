import React from 'react';
// Have the <App /> component render 3 or 4 checkboxes with paragraphs or spans next to it
// like you're making a todo list with some hard-codes items on it

function App() {
    let checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    return(
        <div>
            <input type="checkbox" />
            <p>Placeholder text here</p>

            <input type="checkbox" />
            <p>Placeholder text here</p>

            <input type="checkbox" />
            <p>Placeholder text here</p>

            <input type="checkbox" />
            <p>Placeholder text here</p>
        </div>
    );
}

export default App;