import "./ListTasks.css";
import ButtonSubmit from "./ButtonSubmit";

export default function Task({ element }) {
    return (
        <div className='container'>
            {/* <ButtonSubmit/> */}
            <div class="checkbox-wrapper-11">
                <input id="02-11" type="checkbox" name="r" value="2"/>
                <label for="02-11"><p className='text' >Nombre: {element.name}</p></label>
            </div>
            {/* <p className='text' >Estado: {element.state}</p> */}
            {/* <p className='text' >Estado: {element.title}</p> */}
        </div>
)};