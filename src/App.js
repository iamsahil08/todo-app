// import logo from './logo.svg';
import "./App.css";
import Footer from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import { useState, useEffect } from "react";
import AddTodo from "./MyComponents/AddTodo";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./MyComponents/About";

function App() {
  let initTodo;
  // jab app ko initialize kar rahe hai to check karenge ki localStorage.getItem Null hai?
  if (localStorage.getItem("todos")) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am onDelete  of todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  };
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
   localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
        <Header title="My Todos List" searchBar={false} />
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
        <Footer />
    </>
  );
}

export default App;
