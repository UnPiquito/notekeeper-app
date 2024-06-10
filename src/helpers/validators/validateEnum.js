const validateEnum = (note) => {
  const allowedValues = {
    status: ["pending", "completed", "in_progress"],
  };

  for (const prop in allowedValues) {
    if (note == prop && typeof note[prop] === "string") {
      if (!allowedValues[prop].includes(note[prop])) {
        return false;
      }
    }
  }

  return true;
};

export default validateEnum;
