import { useState } from "react";

const useModal = () => {
  const [modalOpen, setOpenModal] = useState(false);

  const open = () => setOpenModal(true);
  const close = () => setOpenModal(false);

  return { modalOpen, open, close };
};

export default useModal;
