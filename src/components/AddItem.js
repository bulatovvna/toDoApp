
function AddItem(props){

    const {addTodo} = props

    const handler = (e) => {
        if(e.key == 'Enter'){
            addTodo(e.target.value)
        }
    }
    
    return (
        <div className="input_elem">
            <input onKeyDown={handler} placeholder="Помыть полы"/>
            <p className="info">Одно нажатие по заданию - изменение состояния,два нажания - удаление из списка</p>
        </div>
    )
    
}


export default AddItem