import React, { useEffect, useState } from "react";
import ToDo from "./ToDo";
import { getAllToDo, addToDo, updateToDo, deleteToDo } from "../utils/HandleApi";

export default function App(){

    const [toDo, setToDo] = useState([]);
    const [name, setIsName] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);
    const [todoId, setToDoId] = useState("");

    useEffect(() => {
        getAllToDo(setToDo);
    }, []);

    function handleChange(event){
        const {value} = event.target;
        setIsName(value);
    }

    function updateMode(id, name){
        setIsName(name);
        setIsUpdate(true);
        setToDoId(id);
    }


    return(
        <div className="app">
            <div className="container">
                  <h1>ToDo List</h1>
                  <div className="top">
                     <input 
                     type="text" 
                     name="name" 
                     value={name} 
                     placeholder="Add Item..."
                     autoComplete="off"
                     onChange={handleChange}
                      />

                     <div 
                     className="add" 
                     onClick={() =>{
                        isUpdate? 
                        updateToDo(todoId, name, setIsName, setToDo, setIsUpdate) 
                        : 
                        addToDo(name, setIsName, setToDo)
                     }}
                      >
                     {isUpdate ? "Update" : "Add"}
                    
                     </div>

                  </div>

                 
            </div>
            <div className="list">
                     {toDo.map((todoItem) => 
                     <ToDo 
                     key={todoItem._id} 
                     name={todoItem.name}
                     updateMode={() => updateMode(todoItem._id, todoItem.name)}
                     deleteToDo={() => deleteToDo(todoItem._id, setToDo)}

                      />

                    )}
            </div>
        </div>
    );
}