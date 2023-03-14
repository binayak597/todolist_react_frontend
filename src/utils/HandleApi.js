import axios from "axios";

const baseUrl = "https://todolist-backend-n721.onrender.com";

function getAllToDo(setToDo){
    axios
    .get(baseUrl)
    .then((res) =>{
        console.log("data--->", res.data);
        setToDo(res.data);
    })
    .catch((err) => console.log(err));
}


function addToDo(name, setIsName, setToDo){
    axios
    .post(`${baseUrl}/save`, {name})
    .then((res) =>{
        console.log(res.data);
        setIsName("");
        getAllToDo(setToDo);
    }).catch((err) => console.log(err));
}

function updateToDo(todoId, name, setIsName, setToDo, setIsUpdate){
    axios
    .post(`${baseUrl}/update`, {_id: todoId, name})
    .then((res) => {
        console.log(res.data);
        setIsName("");
        setIsUpdate(false);
        getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
}

function deleteToDo(_id, setToDo){
    axios
    .post(`${baseUrl}/delete`, {_id})
    .then((res) => {
        console.log(res.data);
        getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
}

export { getAllToDo, addToDo, updateToDo, deleteToDo };