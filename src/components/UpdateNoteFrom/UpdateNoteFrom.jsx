import React, { useState, useEffect } from "react";
import noteService from "../../services/notes/noteService.js";

const UpdateNoteForm = ({ noteId, onNoteUpdated }) => {
  const [note, setNote] = useState({
    id: "",
    name: "",
    description: "",
    important: false,
    status: "pending",
    due_date: "",
    created_at: null,
  });

  useEffect(() => {
    noteService.getNoteById(noteId).then((fetchedNote) => setNote(fetchedNote));
  }, [noteId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    noteService.updateNote(note).then((updatedNote) => {
      onNoteUpdated(updatedNote);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={note.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={note.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Important: </label>
        <input
          type="checkbox"
          name="important"
          checked={note.important}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Status: </label>
        <select name="status" value={note.status} onChange={handleChange}>
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div>
        <label>Due Date: </label>
        <input
          type="date"
          name="due_date"
          value={note.due_date}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Update Note</button>
    </form>
  );
};

export default UpdateNoteForm;
