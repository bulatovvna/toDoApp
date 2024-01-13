import { useContext } from "react"
import { Context } from "../context"

function TodoItem(props){

    const {id, title, complited} = props
    const {deleteTodo, changeTodo} = useContext(Context)

    return (
        <div 
            className="container" 
            style={{backgroundColor: (complited) ? 'rgb(10, 182, 53)' : 'rgb(239, 50, 50'}}
            onDoubleClick={() => deleteTodo(id)}
            onClick={() => changeTodo(id)}
        > 
            <h2>{title}</h2>
        </div>
    )
}


export default TodoItem