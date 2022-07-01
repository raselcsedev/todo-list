import React, { useState } from 'react';

const ToDoList = () => {
    const [todos, setTodos] = useState([
        {
            'title': 'First Todo',
            'status': 'Pending'
        },
        {
            'title': 'Second Todo',
            'status': 'Done'
        },
        {
            'title': 'Third Todo',
            'status': 'Done'
        },
    ])
    return (
        <div>
            
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    {/*  <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                <label></label>
                            </th>
                            <th>Title</th>
                            <th>Details</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                todos.map((todo, index) => ( 
                    <tr key={index}>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div>
                                        <div class="font-bold">{todo.title}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {todo.status}
                            </td>
                            <td>
                                <button class="btn mx-2 btn-outline btn-xs">edit</button>
                                <button class="btn mx-2 btn-outline btn-xs">delete</button>
                            </td>
                        </tr>

                ))
            }

                        
                        {/* <!-- row 2 --> */}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ToDoList;