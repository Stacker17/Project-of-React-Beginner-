import React from "react";

function Todo(props) {
  return (
    <div className="row">
      <div className="col-5">
        <li>{props.text}</li>
        <button
          type="submit"
          className="btn btn-info" key={props.index}
          onClick={() => {
            props.removeTodo(props.index);
          }}
        >
          ❌Delete
        </button>
      </div>
    </div>
  );
}
export default Todo;
