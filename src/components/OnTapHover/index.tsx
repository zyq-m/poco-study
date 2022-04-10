import { motion } from "framer-motion";

const OnTapHover = ({ children }: any) => {
  return (
    <motion.div
      onClick={e => e.stopPropagation()}
      whileTap={{ scale: 0.95 }}
      whileHover={{ y: -1.5 }}
    >
      {children}
    </motion.div>
  );
};

export default OnTapHover;
