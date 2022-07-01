import React, { useState } from 'react';
import ToDoCreate from './ToDoCreate';
import TodoEdit from './TodoEdit';

const ToDoList = () => {

    const [todoEditing, setTodoEditing] = useState(null);
    const [todos, setTodos] = useState([
        {
            'title': 'First Todo',
            'status': 'Pending'
        },
        {
            'title': 'Second Todo',
            'status': 'Pending'
        },
        {
            'title': 'Third Todo',
            'status': 'Done'
        },
    ]);
    const addTodo = (todo) => { 
        let newTodos = todos.slice();
        newTodos.unshift(todo);
        setTodos(newTodos);
    }

    const updateTodo = ({ index, todo }) => { 
        let newTodos = todos.slice();
        newTodos[index] = todo;
        setTodos(newTodos);
        setTodoEditing(null);
    }

    const deleteTodo = (index) => { 
        let newTodos = todos.slice();
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }
    return (
        <div>
            <ToDoCreate onCreateTodo={todo => addTodo(todo)} ></ToDoCreate>
            <div>
            <h1 className='text-3xl mt-5 lg:px-24 font-bold text-success'>My Todo List</h1>
            </div>
            <div class="overflow-x-auto mt-5 lg:px-24 flex w-full">
                <table class="table border w-full">
                    {/*  <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                todos.map((todo, index) => ( 
                    <tr key={index}>
                            <td>
                                <div class="flex items-center space-x-3">
                                    <div>
                                        <div class="font-bold">
                                        {
                                            (todoEditing === index) ? 
                                            <TodoEdit 
                                                todo={todo}
                                                index={index}
                                                onUpdateTodo={value => updateTodo(value)}
                                            />
                                            :
                                            <>
                                                { todo.status === 'Pending' && todo.title }
                                                { todo.status === 'Done' && <del>{todo.title }</del> }
                                            </>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                            <button class="btn mx-2 btn-outline" onClick={() => setTodoEditing(index)}>edit</button>
                                <button class="btn mx-2 btn-outline" onClick={() => deleteTodo(index)}>delete</button>
                            </td>
                            
                            
                        </tr>

                ))
            }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ToDoList;