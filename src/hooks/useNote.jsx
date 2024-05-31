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

  const createNote = (newNote) => {
    noteService
      .createNote(newNote)
      .then((createdNote) => {
        setNoteData((prevNotes) => [...prevNotes, createdNote]);
      })
      .catch((error) => {
        console.error("Error creating note:", error);
      });
  };

  const deleteNote = (noteId) => {
    noteService
      .deleteNote(noteId)
      .then(() => {
        setNoteData((prevNotes) =>
          prevNotes.filter((note) => note.id !== noteId)
        );
      })
      .catch((error) => {
        console.error("Error deleting note:", error);
      });
  };

  useEffect(() => {
    getNotes();
  }, []);

  return { noteData, updateNote, createNote, deleteNote };
};

export default useNote;
