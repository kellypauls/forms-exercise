import React, { useState } from "react";
import { v4 as uuid } from 'uuid';


const NewBoxForm = ({createBox}) => {
    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const takeInput = e => {
        e.preventDefault();
        createBox({...formData, id: uuid() });
        setFormData({ height: "", width: "", bgcolor: ""});
    }
    return (
        <div>
        <form id="box-form" onSubmit={takeInput}>
            <div>
                <label htmlFor="height">Height</label>
                <input
                    onChange={handleChange}
                    name="height"
                    type="text"
                    value={formData.height}
                    id="height" 
                    />
                </div>
            <div>
            <label htmlFor="width">Width</label>
                <input 
                    onChange={handleChange}
                    name="width"
                    type="text"
                    value={formData.width}
                    id="width"
                    />
                </div>
            <div>
            <label htmlFor="backgroundColor">Background Color</label>
            <input
                onChange={handleChange}
                type="text"
                name="backgroundColor"
                value={formData.backgroundColor}
                id="backgroundColor"
            />
                </div>
            <button type="submit" id="newBox-btn">Add a new Box!</button>
        </form>
      </div>
    );
}

export default NewBoxForm;