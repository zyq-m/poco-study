import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { SiRabbitmq } from "react-icons/si";

const NavBar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.4 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex justify-between items-center px-4 py-6"
    >
      <Link to="/">
        <SiRabbitmq />
      </Link>
      <FiMenu className="w-5 h-5" />
    </motion.nav>
  );
};

export default NavBar;
