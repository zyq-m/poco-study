import { BackDrop } from "..";
import { motion } from "framer-motion";
import { popUp } from "../../animations";

const ConfirmationPopUp = ({ handleClose, onYes, onNo }: any) => {
  return (
    <BackDrop onClose={handleClose} style="items-center">
      <motion.div
        onClick={e => e.stopPropagation()}
        variants={popUp}
        initial="initial"
        animate="animate"
        exit="exit"
        className="max-w-sm mx-auto w-full p-6  box bg-gray-800"
      >
        <h3 className="font-medium mb-7">Are you sure want to delete?</h3>
        <div className="flex justify-around gap-3">
          <motion.button
            whileHover={{ opacity: 0.8 }}
            whileTap={{ scale: 0.98, opacity: 0.8 }}
            onClick={onYes}
            className="py-2 font-medium w-full rounded-full text-black border-white bg-white"
          >
            Yes
          </motion.button>
          <motion.button
            whileHover={{ opacity: 0.8 }}
            whileTap={{ scale: 0.98, opacity: 0.8 }}
            onClick={onNo}
            className="py-2 font-medium w-full rounded-full border border-white"
          >
            No
          </motion.button>
        </div>
      </motion.div>
    </BackDrop>
  );
};

export default ConfirmationPopUp;
