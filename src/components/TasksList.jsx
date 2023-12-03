import "./ListTasks.css";
import { dataTasks } from "../data"
import Task from "./Task";
import { useState } from "react";

export default function TasksList({  }) {
    const [vInput, setVInput] = useState("");
    const [list,    setList] = useState(dataTasks);

    function handleAddTask(  ) {
        const newTask = 
        {
            id: Date.now(),
            name: vInput,
            state: false,
        };
        setList([...list, newTask]);
    };

    return (
        <div>
            <label>
                Tarea: 
                <input 
                value={vInput}
                onChange={(e)=>{
                    setVInput(e.target.value);
                }}/>
            </label>
            <button className="button-86" role="button" onClick={handleAddTask} >Agregar</button>
            <div>
                {list.map((item)=>{
                    return(
                        <Task key={item.id} element={item} />
                )})}
            </div>
        </div>
        
)};