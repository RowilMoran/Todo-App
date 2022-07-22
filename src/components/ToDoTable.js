import React, { useState } from "react";
import UpdateForm from "./UpdateForm";

const ToDoTable = ({ el, updateData, deleteData }) => {
  const [isEdit, setIsEdit] = useState(false);

  const { todo } = el;
  
  return (
    <div className="tareas">
      {isEdit ? (
        <UpdateForm el={el} updateData={updateData} setIsEdit={setIsEdit} />
      ) : (
        <>
          <h4>{todo}</h4>
          <div className="actions">
            <button id="edit" onClick={() => setIsEdit(true)}>editar</button>
            <button id="delete" onClick={() => deleteData(el.id)}>eliminar</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ToDoTable;
