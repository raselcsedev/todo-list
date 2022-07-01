import React, { useState } from 'react';

const ToDoCreate = ({ onCreateTodo }) => {
    const [title, setTitle] = useState(''); 
    const createTodo = () => {
        if (title.length > 0) {
            const todo = {
                title,
                status: 'Pending'
            }
            onCreateTodo(todo);
            setTitle('');
        }
    }
    const handleEnterSubmission = (e) => {
        if( e.key === "Enter") {
            createTodo();
        }
    }
    return (
        <>
        <div className='flex px-24 mt-5 w-full'>
            <input 
            type="text" 
            value={title} 
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => handleEnterSubmission(e)}
            placeholder="Enter todo" 
            class="input input-bordered mr-2 w-96 " />
            <button 
            class="btn btn-outline " 
            onClick={e => createTodo()}>Add Todo</button>

        </div>
        </>
    );
};

export default ToDoCreate;