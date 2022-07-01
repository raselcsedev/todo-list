import React, { useState } from 'react';

const TodoEdit = ({ onUpdateTodo, todo, index }) => {
    const [title, setTitle] = useState(todo.title);
    const [status, setStatus] = useState(todo.status);

    const updateTodo = () => {
        if (title.length > 0) {
            const todo = {
                title,
                status
            }
            onUpdateTodo({
                index,
                todo
            });
        }
    }

    const handleEnterSubmission = (e) => {
        if (e.key === "Enter") {
            updateTodo();
        }
    }

    return (
        <>
            <div className='flex w-full'>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    onKeyDown={e => handleEnterSubmission(e)}
                    placeholder="Enter todo"
                    class="input input-bordered mx-auto " />

                &nbsp; &nbsp;

                <select name="status" id="status" value={status}
                    onChange={e => setStatus(e.target.value)}
                >
                    <option value="Pending">Pending</option>
                    <option value="Done">Done</option>
                </select>

                &nbsp; &nbsp;
                <button
                    class="btn btn-outline"
                    onClick={e => updateTodo()}>Update</button>

            </div>

        </>
    );
};

export default TodoEdit;