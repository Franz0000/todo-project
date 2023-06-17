import Header from './components/Header'
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState } from 'react'
function App() {
  const [todo,setTodo] = useState("");
  const [todoList,setTodoList] = useState([]);
  return (
    <div className="App">
      <Header todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}></Header>
      {/* <Form todo={todo} setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}></Form> */}
      <TodoList setTodo={setTodo} todoList={todoList} setTodoList={setTodoList}></TodoList>
    </div>
  );  
}

export default App;
