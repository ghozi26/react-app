import React, { useState, useEffect } from "react";
import uuid from "uuid";
import publicIp from "public-ip";

import Nav from "./Nav";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Counter = props => {
  const [getItems, setItems] = useState([]);
  const [getId, setId] = useState(uuid());
  const [getItem, setItem] = useState("");
  const [getStatus, setStatus] = useState(false);
  const [getLocation, setLocation] = useState({});

  useEffect(() => {
    weather();
  }, []);

  const handleChangeItem = e => {
    setItem(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: getId,
      item: getItem,
      status: getStatus
    };
    setItems([...getItems, newItem]);
    setItem("");
    setStatus(false);
    setId(uuid());
  };

  const clearHandler = () => {
    setItems([]);
  };

  const handleDelete = id => {
    const filtered = getItems.filter(item => item.id !== id);
    setItems(filtered);
  };

  const changeStatus = (id, status) => {
    console.log(status);
    const data = getItems.find(x => x.id === id);
    let index = getItems.findIndex(x => x.id === id);
    const change = { ...data, status: !status ? true : false };
    const result = getItems.splice(index, 1, change)[0];
    const filtered = getItems.filter(item => item.id !== id);
    setItems(filtered);
    setItems([...getItems]);
  };

  const options = {
    method: "GET"
  };

  const weather = async () => {
    const ip = await publicIp.v4();
    const data = await fetch(
      `http://api.ipstack.com/${ip}
      ? access_key=a3523fd06f9b7220cfd53d25ff9fce2c`,
      options
    );
    const resJson = await data.json();
    setLocation(resJson);
    console.log(resJson);
  };

  return (
    <>
      <Nav />
      <div className="container mt-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3>Todo Input</h3>
            <p>
              {getLocation.region_name}, {getLocation.country_name}, IP ={" "}
              {getLocation.ip}
            </p>
            <TodoInput
              item={getItem}
              handleChangeItem={handleChangeItem}
              handleSubmit={handleSubmit}
            />
            <TodoList
              items={getItems}
              clearHandler={clearHandler}
              handleDelete={handleDelete}
              changeStatus={changeStatus}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
