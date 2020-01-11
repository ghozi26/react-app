import React, { useState } from "react";
import "../styles/todo.css";

const TodoItem = props => {
  const { item, status, handleDelete, changeStatus } = props;
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
      {status ? (
        <del>
          {" "}
          <h6>{item}</h6>
        </del>
      ) : (
        <h6>{item}</h6>
      )}
      <div className="todo-icon">
        {status ? (
          <span className="mx-2 text-danger" onClick={changeStatus}>
            <i className="fa fa-times" />
          </span>
        ) : (
          <span className="mx-2 text-success" onClick={changeStatus}>
            <i className="fa fa-check" />
          </span>
        )}

        <span className="mx-2 text-danger buttonsubmit" onClick={handleDelete}>
          <i className="fa fa-trash" />
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
