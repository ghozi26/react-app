import React, { useState } from "react";
import Nav from "./Nav";

const TodoInput = props => {
  const { item, handleChangeItem, handleSubmit } = props;

  return (
    <>
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fa fa-pencil" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Add Todo"
              value={item}
              onChange={handleChangeItem}
            />
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TodoInput;
