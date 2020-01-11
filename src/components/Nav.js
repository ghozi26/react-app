import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <b>Todo App</b>
        </a>
        <button
          className="navbar-toggler p-0 border-0"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </>
  );
};

export default Nav;
