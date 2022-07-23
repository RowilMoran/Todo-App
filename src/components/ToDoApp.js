import React, { useEffect, useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoTable from "./ToDoTable";
import { useLocalStorage } from "../hooks/useLocalStorage";
//let todoInit = JSON.parse(localStorage.getItem("db")) || [];

const ToDoApp = () => {
  const [db, setDb] = useLocalStorage("db", []);

  useEffect(() => {
    localStorage.setItem("db", JSON.stringify(db));
  }, [db]);

  const createData = (data) => {
    //create an id to the new todo input.
    data.id = Date.now();
    //joing what is coming from data (toDoForm) to the db variable
    setDb([...db, data]);
   // localStorage.setItem("db", JSON.stringify([...db, data]));
  };

  const updateData = (data) => {
    const newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
    //localStorage.setItem("db", JSON.stringify(newData));
  };

  const deleteData = (id) => {
    const restData = db.filter((el) => el.id !== id);
    setDb(restData);
    //localStorage.setItem("db", JSON.stringify(restData));
  };
  return (
    <div>
      <h2>What are you doing today??</h2>
      <ToDoForm createData={createData} />
      {db.length > 0 ? (
        db.map((el) => (
          <ToDoTable
            updateData={updateData}
            deleteData={deleteData}
            el={el}
            key={el.id}
          />
        ))
      ) : (
        <h3>no hay tareas pendientes</h3>
      )}
    </div>
  );
};

export default ToDoApp;
