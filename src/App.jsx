import  useNote  from "./hooks/useNote.jsx";
import NoteList from "./components/NoteList/NoteList.jsx";
function App() {
  const {
    notes,
    loading,
    handleAddNewNote,
    getAllNotesHandler,
    handleDeleteNote,
    handleUpdateNote,
  } = useNote();

  return (
    <NoteList
      notes={notes}
      loading={loading}
      handleAddNewNote={handleAddNewNote}
      getAllNotesHandler={getAllNotesHandler}
      handleUpdateNote={handleUpdateNote}
      handleDeleteNote={handleDeleteNote}
    />
  );
}

export default App;
