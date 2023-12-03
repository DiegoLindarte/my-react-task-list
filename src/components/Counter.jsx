import { useState } from "react"

export default function Counter({  }) {

    const [state, setState] = useState(0)

    return (
        <div>
            <h3>Contador: {state}</h3>
            <button onClick={()=>setState(state + 1)} >+1</button>
            <button onClick={()=>setState(state - 1)} >-1</button>
        </div>
    )
};