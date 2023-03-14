import React from 'react'
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

export default function ToDo(props){
    return(
        <div className="todo">
            <div className="list-name">{props.name}</div>
            <div className="icons">
                <BiEdit className="icon" onClick={props.updateMode} />
                <AiFillDelete className="icon" onClick={props.deleteToDo} />
            </div>
        </div>
    );
}