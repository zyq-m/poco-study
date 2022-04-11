import { motion } from "framer-motion";

const BackDrop = ({ children, onClose, style }: any) => {
  return (
    <motion.div
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed top-0 left-0 w-full h-full grid ${style} px-4 bg-backdrop-color`}
    >
      {children}
    </motion.div>
  );
};

export default BackDrop;
