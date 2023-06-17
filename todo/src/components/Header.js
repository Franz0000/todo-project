import styles from '../style.module.css'
import Form from './Form';

const Header = ({todo,setTodo,todoList,setTodoList}) => {
    return (
        <div className={styles.header}>
            Todo App
            <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}></Form>
        </div>
    )
}

export default Header;