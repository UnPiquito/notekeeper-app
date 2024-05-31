const Note = ({ note }) => {
  return (
    <div>
      <h2>{note.name}</h2>
      <p> Description: {note.description}</p>
      <p> Important: {note.important}</p>
      <p> Status: {note.status}</p>
      <p> Due_Date: {note.due_date}</p>
    </div>
  );
  };

export default Note;
