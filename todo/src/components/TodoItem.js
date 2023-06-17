import styles from '../style.module.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Table , Button} from 'react-bootstrap';
const TodoItem = ({item, todoList, setTodoList}) =>{
    let date = new Date()
     date = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    const deleteButton = () => {

        setTodoList(todoList.filter((newtodoList) => newtodoList.id !== item.id))
    }
    return (
        <div className= {styles.todoItem}> 
            {/* <h3 >{item.name}</h3>
            <button onClick={deleteButton} className= {styles.todoButton}>done</button> */}
            <table className={styles.todotable}>
                <th>dateCreated</th>
                <th>Task</th>
                <th>Status</th>
                <tr>
                    <td>{date}</td>
                    <td>{item.name}</td>
                    <td><button onClick={deleteButton} className= {styles.todoButton}>done</button></td>
                </tr>
            </table>
        </div>
    ) 
}

export default TodoItem;