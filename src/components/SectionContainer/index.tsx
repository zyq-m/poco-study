import { motion } from "framer-motion";
import { fadeOut } from "../../animations";

const SectionContainer = ({ children, label }: any) => {
  return (
    <motion.article variants={fadeOut} className="mt-6">
      <label htmlFor="schedule" className="text-xs">
        {label}
      </label>
      <section id="schedule">{children}</section>
    </motion.article>
  );
};

export default SectionContainer;
