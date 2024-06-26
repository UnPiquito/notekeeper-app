const validateType = (note) => {
  const expectedTypes = {
    id: "string",
    name: "string",
    description: "string",
    important: "boolean",
    status: "string",
    due_date: "string",
    created_at: "number",
  };

  for (const prop in expectedTypes) {
    if (!note == prop) {
      return false;
    }

    if (typeof note[prop] !== expectedTypes[prop]) {
      return false;
    }
  }

  return true;
};

export default validateType;
