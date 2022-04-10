import { useState } from "react";

const useWarning = () => {
  const [warning, setWarning] = useState(false);

  const closeWarning = (): void => setWarning(false);
  const openWarning = (): void => setWarning(true);

  return { warning, closeWarning, openWarning };
};

export default useWarning;
