import React, { useState, useEffect } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([{'txt':'Learn Hooks'},{'txt':'xxx'},{'txt':'ccc'},{'txt':'ccxxc'},{'txt':'cc33c'}]);

  

  return (
    <div className="mb-5" >
      <ul > 
        <li><a href="https://reactjs.org/docs/hooks-overview.html" target="_blank" rel="noopener noreferrer">Hook</a>  </li>
        <li><a href="https://reactjs.org/docs/hooks-effect.html" target="_blank" rel="noopener noreferrer">Using the Effect Hook</a></li>
        <li><a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"  target="_blank" rel="noopener noreferrer">R lifecycle diagram</a></li>
       
    </ul>
   
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setTodos(todos.map((todo,key)=>{
           key = todo.txt+"@"
           todo.txt = todo.txt+"@"
           return todo
         }))}>
        Todos
      </button>
      {todos.map((todo)=>{
          return <div key={todo.txt}>{todo.txt}</div>
      })}
    </div>
  );
}
export default Example;