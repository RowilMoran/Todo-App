import { useState } from "react";

const UpdateForm = ({ el, updateData,setIsEdit }) => {
  const [updateTodo, setUpdateTodo] = useState(el);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(updateTodo);
    setIsEdit(false);
    setUpdateTodo("")
  };

  const handleOnchange = (e) => {
    setUpdateTodo({
      ...updateTodo,
      todo: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="editForm">
      <input
        type="text"
        name="todo"
        value={updateTodo.todo}
        onChange={handleOnchange}
      />
      <input type="submit" value="update" />
    </form>
  );
};

export default UpdateForm;
