import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { NavBar, CreateSchedule, ModalLoader } from "../../components";

const AddSchedule = () => {
  const { scheduleId } = useParams();

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
            <CreateSchedule scheduleId={scheduleId} />
          </motion.div>
        </ModalLoader>
      </main>
    </>
  );
};

export default AddSchedule;
