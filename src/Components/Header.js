import React from 'react'
import todologo from '../images/todo-list.png'
import { Link } from 'react-router-dom'
export const Header = (props) => {
    return (
        <div className='header-box'>
            <div className='leftside'>
                <div className='img'>
                    <img src={todologo} alt="todologo" />

                </div>
                <div className='content'>
                    <div className='header-big'>
                        To Do List{props.setData}
                    </div>
                </div>
            </div>

            <div className='rightside'>
                <Link to="/signup">
                    SIGN UP
                </Link>

                <Link to="/login">
                    LOGIN
                </Link>
            </div>


                 
            
        </div>
    )
}
