import useNote from "./hooks/useNote.jsx";
import NoteList from "./components/NoteList/NoteList.jsx";
import CreateNoteForm from "./components/CreateNoteFrom/CreateNoteFrom.jsx";
import { useState } from "react";

function App() {
  const {
    notes,
    loading,
    handleAddNewNote,
    getAllNotesHandler,
    handleDeleteNote,
    handleUpdateNote,
  } = useNote();
  const [setSelectedNoteId] = useState(null);

  const handleNoteSelect = (id) => {
    setSelectedNoteId(id);
  };

  return (
    <div>
      <h1>NoteKeeper</h1>
      <CreateNoteForm onNoteCreated={handleAddNewNote} />      
      <NoteList
        notes={notes}
        loading={loading}
        handleAddNewNote={handleAddNewNote}
        getAllNotesHandler={getAllNotesHandler}
        handleUpdateNote={handleUpdateNote}
        handleDeleteNote={handleDeleteNote}
        onNoteSelect={handleNoteSelect}
        onUpdate={handleUpdateNote} 
      />
    </div>
  );
}

export default App;
