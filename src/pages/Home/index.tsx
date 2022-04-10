import { motion } from "framer-motion";
import {
  NavBar,
  CurrentDate,
  Classes,
  TimeTable,
  ModalLoader,
} from "../../components";

import { stagger } from "../../animations";

const Home = () => {
  return (
    <>
      <main className="fixed-w">
        <NavBar />
        <ModalLoader>
          <motion.div
            initial="initial"
            animate="animate"
            exit={{ opacity: 0 }}
            className="my-[30px] px-4"
          >
            <motion.div variants={stagger}>
              <CurrentDate />
              <Classes />
              <TimeTable />
            </motion.div>
          </motion.div>
        </ModalLoader>
      </main>
    </>
  );
};

export default Home;
