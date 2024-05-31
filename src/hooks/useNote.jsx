import { useState, useEffect } from "react";
import noteService from "../services/notes/noteService.js";


const useNote = () => {
  const [noteData, setNoteData] = useState([]);

  const updateNote = (newData) => {
    setNoteData(newData);
  };

  const getNotes = () => {
    noteService
      .getAllNotes()
      .then((data) => {
        updateNote(data.notes);
      })
      .catch((error) => {
        console.error("Error fetching notes:", error);
      });
  };

  useEffect(() => {
    getNotes();
  }, []);
  return { noteData, updateNote };
};

export default useNote;
