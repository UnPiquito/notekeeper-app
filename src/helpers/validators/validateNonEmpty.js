const notes = {
  id: "vmz45-1715621567899",
  name: "Walk the dog",
  description: "Go to the park",
  important: false,
  status: "pending",
  due_date: "5/13/2024",
  created_at: 1715621568041,
};
const validateNonEmpty = (note) => {
  if (
    note.id !== "" &&
    note.id.trim().length > 0 &&
    note.name !== "" &&
    note.name.trim().length > 0 &&
    note.description !== "" &&
    note.description.trim().length > 0 &&
    note.status !== "" &&
    note.status.trim().length > 0 &&
    note.due_date !== "" &&
    note.due_date.trim().length > 0
  ) {
    return true;
  }

  return false;
};

export default validateNonEmpty;
