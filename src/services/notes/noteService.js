const baseUrl = `${import.meta.env.VITE_NOTEKEEPER_API}`;
const urlPath = "notes";
const urlFetchNotes = `${baseUrl}/${urlPath}`;

const getAllNotes = () => {
  console.log(urlFetchNotes)
  return fetch(urlFetchNotes).then((response) => response.json());
};


const createNote = (newNote) => {
  const request = fetch(urlFetchNotes, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newNote.name,
      description: newNote.description,
      important: newNote.important,
      status: newNote.status,
      due_date: newNote.due_date,
      created_at: newNote.created_at,
    }),
  }).then((response) => {
    return response.json();
  });
  return request;
};

const updateNote = ({
  id,
  name,
  description,
  important,
  status,
  due_date,
  created_at,
}) => {
  return fetch(`${urlFetchNotes}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      name: name,
      description: description,
      important: important,
      status: status,
      due_date: due_date,
      created_at: created_at,
    }),
  }).then((response) => response.json());
};

const deleteNote = (id) => {
  return fetch(`${urlFetchNotes}/${id}`, {
    method: "DELETE",
  }).then((response) => response.json());
};

export default {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
};
