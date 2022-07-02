import React, { useState } from 'react';

const ToDoCreate = ({ onCreateTodo }) => {

    const taskSubmit = (event) => {
        event.preventDefault();
        const task = {
            
            
            task: event.target.ratings.value,
            
        }
        fetch('https://quiet-beach-66273.herokuapp.com', {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
                
            },
            body: JSON.stringify(task)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            
        })

    };


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
        if (e.key === "Enter") {
            createTodo();
        }
    }
    return (
        <>
            <div>
                <h1 className='text-3xl mt-5 lg:px-24 font-bold text-success'>Add New Task</h1>
            </div>
            <form onSubmit={taskSubmit}>

            <div className='flex lg:px-24 mt-5 w-full'>
                <input
                    type="text"
                    value={title}
                    name='task'
                    onChange={e => setTitle(e.target.value)}
                    onKeyDown={e => handleEnterSubmission(e)}
                    placeholder="Enter todo"
                    class="input input-bordered mr-2 w-96 " />
                <button
                    class="btn btn-outline "
                    onClick={e => createTodo()}>Add Todo</button>

            </div>
            </form>
        </>
    );
};

export default ToDoCreate;