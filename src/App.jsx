import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
//import Condicion from './components/Condicion'
import ButtonSubmit from './components/ButtonSubmit'
//import TaskList from './components/TaskList'
import TasksList from './components/TasksList'
//import Counter from './components/Counter'
//import ListStore from './components/TasksList'
//import ListTasks from './components/TasksList'

function App(  ) {

  const dataTaskList = [
    {
      id: 1,
      name: "Tarea 1",
      description: "Descripcion Tarea",
      complete: false
    },
    {
      id: 2,
      name: "Tarea 2",
      description: "Descripcion Tarea 2",
      complete: false
    },
    {
      id: 3,
      name: "Tarea 3",
      description: "Descripcion Tarea 3",
      complete: false
    }
  ]

  return(
    <div>
      {/* <Body/> */}
      {/* <Header title={"Clase de React"} description={"Header"} /> */}
      <Header title={"Lista de Tareas"}/>
      {/* <TaskList taskList={dataTaskList}/> */}
      {/* <ButtonSubmit/> */}
      <TasksList/>
      {/* <Condicion valor={true}/>
      <Condicion valor={false}/>
      <Counter/> */}
    </div>
  )
}

/* function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
} */

export default App
