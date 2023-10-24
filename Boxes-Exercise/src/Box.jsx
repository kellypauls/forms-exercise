import React from "react";

function Box({
    id,
    handleRemove,
    backgroundColor = 'black',
    height = 2,
    width = 2
}) {
    const remove = () => handleRemove(id);
        return (
            <div>
                <div style={{
                    height: `${height}em`,
                    width: `${width}em`,
                    backgroundColor,
                }}
            />
            <button onClick={remove}>Remove This Box</button>
        </div>
    );
}

export default Box;