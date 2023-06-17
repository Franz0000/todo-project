import styles from '../style.module.css'
import shortid from 'shortid'

const Form = ({todo,setTodo,todoList,setTodoList}) => {
    const handleChange = (event) =>{
        setTodo(event.target.value);
        console.log(todo)
    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        if(todo.length === 0){
            alert("Please input item")
        } else {
            setTodoList([...todoList,{name:todo,id:shortid.generate()}])
            setTodo("")
            console.log(todoList)  
        }

    }
    return (
        <div onSubmit={handleSubmit} className={styles.todoForm}>
            <form>
                <input value={todo} onChange={handleChange} className = {styles.formInput} type='text' placeholder='add item'></input>
                <button className={styles.formButton} type='submit'>add</button>
            </form>
        </div>

    )

}

export default Form;