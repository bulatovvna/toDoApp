
function AddItem(props){

    const {addTodo} = props

    const handler = (e) => {
        if(e.key == 'Enter'){
            addTodo(e.target.value)
        }
    }
    
    return (
        <div className="input_elem">
            <input onKeyDown={handler}/>
        </div>
    )
    
}


export default AddItem