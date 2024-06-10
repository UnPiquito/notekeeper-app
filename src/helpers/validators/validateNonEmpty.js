
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
