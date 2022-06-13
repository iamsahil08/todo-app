import React from "react";
import TodoItem from "./TodoItem";

function Todos(props) {
  let myStyle = {
    minHeight: "70vh",
    margin: "35px auto"
}
  return (
    <>
      <div className="container" style={myStyle}>
        <h3 className="text-center my-4">Todos List</h3>
        {/* For loop ki sahayta se array ko render karenge */}
        {props.todos.length===0
          ? "No todos to display"
          : props.todos.map((todo) => {
              return ( <TodoItem
                    todo={todo}
                    key={todo.sno}
                    onDelete={props.onDelete}
                  />
              );  
            })}
      </div>
    </>
  );
}

export default Todos;
