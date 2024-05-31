import { useState } from "react";

const useVisible = () => {
  const [visible, setvisible] = useState(false);

  const updatevisible = (newData) => {
    setvisible(newData);
  };

  return { visible, updatevisible};
};

export default useVisible;
