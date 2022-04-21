import React, { useState } from 'react'
import todologo from '../images/todo-list.png'
import { Link } from 'react-router-dom'
import './Todolist.css'
export const Todolist = (props) => {
    const [toDos, setToDos] = useState([])
    const [toDo, setToDo] = useState('')
    return (
        <>
            <div className='header-box'>
                <div className='leftside'>
                    <div className='img'>
                        <img src={todologo} alt="todologo" />

                    </div>
                    <div className='content'>
                        <div className='header-big'>
                            Welcome{props.setData}
                        </div>
                    </div>
                </div>
            </div>

            <div className="app">
                <div className="mainHeading">
                    <h1>ToDo List</h1>
                </div>


                <div className="input">
                    <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
                    <i onClick={() => setToDos([...toDos,
                    { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus" ></i>
                </div>
                <div className="todos">
                    {toDos.map((obj) => {

                        return (<div className="todo">
                            <div className="left">
                                <input onChange={(e) => {
                                    console.log(e.target.checked)
                                    console.log(obj)
                                    setToDos(toDos.filter(obj2 => {
                                        if (obj2.id === obj.id) {
                                            obj2.status = e.target.checked
                                        }
                                        return obj2
                                    }))
                                }}
                                    value={obj.status} type="checkbox" name="" id="" />
                                <p>{obj.text}</p>
                            </div>
                            <div className="right">
                                <i className="fas fa-times"></i>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </>





    )
}
