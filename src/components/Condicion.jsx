export default function Condicion({valor}) {
    
    if (valor) {
        return(
            <div>
                <h2>Tareas realizadas</h2>
            </div>
        )
    } else {
        return(
            <div>
                <h2>Aun no hay tareas</h2>
            </div>
        )
    }

}