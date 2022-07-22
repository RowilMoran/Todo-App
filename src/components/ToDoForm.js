import React, { useState } from "react";

const initialForm = {
  todo: "",
  id: null,
  complete : false
};

const ToDoForm = ({ createData }) => {
  const [toDoForm, setToDoForm] = useState(initialForm);

  //save in "toDoForm" the new input

  const handleChange = (e) => {
    setToDoForm({
      ...toDoForm,
      todo: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!toDoForm.todo) {
      alert("escribe una tarea");
    } else {
      createData(toDoForm);
      alert("enviado");
    }

    handleReset();
  };

  const handleReset = () => {
    setToDoForm(initialForm);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        name="todo"
        value={toDoForm.todo}
        onChange={handleChange}
      />
      <input type="submit"/>
    </form>
  );
};

export default ToDoForm;
