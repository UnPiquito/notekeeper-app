import React from "react";
import useNote from "../../hooks/useNote.jsx";
import Note from "../Note/Note.jsx";

const NoteList = () => {
  const { noteData, updateNote } = useNote();

  return (
    <div>
      {noteData.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
