import useNote from "../../hooks/useNote.jsx";
import Note from "../Note/Note.jsx";

const NoteList = () => {
  const { noteData, deleteNote } = useNote();

  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div>
      {noteData.map((note) => (
        <Note key={note.id} note={note} onDelete={handleDeleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
