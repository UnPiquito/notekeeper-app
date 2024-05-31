import React from "react";
import useVisible from "../../hooks/useVisible.jsx"
import UpdateNoteForm from "../UpdateNoteFrom/UpdateNoteFrom.jsx";

const Note = ({ note, onDelete, onUpdate }) => {
  const { id, name, description, important, status, due_date } = note;
  const {visible, updatevisible} = useVisible();

  const handleDelete = () => {
    onDelete(id);
  };

  const handleUpdate = () => {
    updatevisible(true)
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Important: {important ? "Yes" : "No"}</p>
      <p>Status: {status}</p>
      <p>Due Date: {due_date}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update</button>{" "}
      {visible ? (
        <UpdateNoteForm
          noteId={id}
          visible = {updatevisible}
        />
      ):("")}
    </div>
  );
};

export default Note;
