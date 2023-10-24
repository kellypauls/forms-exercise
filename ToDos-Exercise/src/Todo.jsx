import React, { useState } from "react";

function Todo({ task = "default task", id='1', remove, update}) {
    const [editTask, setEditTask] = useState(task);
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(edit => !edit);
    };

    const handleChange = e => {
        setEditTask(e.target.value);
    };

    const handleRemove = () => remove(id);

    const handleUpdate = e => {
        e.preventDefault();
        update(id, editTask);
        setIsEditing(false);
    }

    let todoItem = (
        <div>
          <li>{task}</li>
          <button onClick={toggleEdit}>Edit</button>
          <button onClick={handleRemove}>X</button>
        </div>
      );

      if (isEditing) {
        todoItem = (
          <div>
            <form onSubmit={handleUpdate}>
              <input type="text" value={editTask} onChange={handleChange} />
              <button>Update!</button>
            </form>
          </div>
        );
      }
    
      return todoItem;
    }

    export default Todo;