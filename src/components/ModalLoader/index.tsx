import { AnimatePresence } from "framer-motion";

const ModalLoader = ({ children }: any) => {
  return <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>;
};

export default ModalLoader;
