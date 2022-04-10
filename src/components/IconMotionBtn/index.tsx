import { motion } from "framer-motion";

const IconMotionBtn = ({ children }: any) => {
  return (
    <motion.div
      whileTap={{ backgroundColor: "rgb(255, 255, 255, 0.24)" }}
      whileHover={{ backgroundColor: "rgb(255, 255, 255, 0.24)" }}
      onClick={e => e.stopPropagation()}
      className="p-2 rounded-full"
    >
      {children}
    </motion.div>
  );
};

export default IconMotionBtn;
