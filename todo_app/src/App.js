import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo.js";

function App() {
  const [todos, setTodos] = useState([
    "Take your pet for the Walk.",
    "Give your pet some Pedigree to eat.",
    "I have to meet Shadman Ahmad Khan today.",
  ]);
  const [input, setInput] = useState("");
  console.log("🔫", input);

  const addTodo = (event) => {
    //This will fire off when we click the button
    event.preventDefault(); //Will Stop page from refreshing
    console.log("👽", "Im Working");
    setTodos([...todos, input]);
    setInput(""); //Clearing the input after clicking the Add To Todo List
  };

  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos([...temp]);
  };
   
  return (
    <div className="App">
      <h1>Hello Flashbreakdown Programer🚀!</h1>
      <hr></hr>
      <form>
        <div>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            ✅ Write a Todo{" "}
          </label>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button
            disabled={!input}
            type="submit"
            onClick={addTodo}
            class="btn btn-primary"
          >
            Add Todo List
          </button>
        </div>
      </form>
      <ul>
        {todos.map((todo,index) => (
          <Todo text={todo} removeTodo={removeTodo} index={index}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
