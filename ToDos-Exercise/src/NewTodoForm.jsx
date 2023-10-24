import React, { useState } from "react";
import { v4 as uuid } from 'uuid';


const NewTodoForm = ({createTodo}) => {
    const [task, setTask] = useState("");

    const handleChange = e => {
        setTask(e.target.value);
    }

    const takeInput = e => {
        e.preventDefault();
        createTodo({task, id: uuid() });
        setTask("");
    }

    return (
        <div>
            <form id="todo-form" onSubmit={takeInput}>
                <div>
                    <label htmlFor="task">Task:</label>
                    <input
                        onChange={handleChange}
                        name="task"
                        type="text"
                        value={task}
                        id="task"
                        />
                    </div>
                <button>Add a Todo!</button>
            </form>
        </div>
    );
}

export default NewTodoForm;