import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
  const { items, clearHandler, handleDelete, changeStatus } = props;
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>
      {items.map((e, i) => {
        console.log(e);
        return (
          <TodoItem
            item={e.item}
            handleDelete={() => handleDelete(e.id)}
            changeStatus={() => changeStatus(e.id, e.status)}
            status={e.status}
            key={e.id}
          />
        );
      })}
      <button className="btn btn-block btn-danger" onClick={clearHandler}>
        Clear
      </button>
    </ul>
  );
};

export default TodoList;
