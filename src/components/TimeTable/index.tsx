import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  SectionContainer,
  OnTapHover,
  ViewSchedule,
  ModalLoader,
} from "../../components";
import { useModal } from "../../hooks";
import { MdAdd } from "react-icons/md";
import { parseLocalStorage } from "../../helper";
import { popUp, stagger } from "../../animations";

const TimeTable = () => {
  const { modalOpen, open, close } = useModal();
  const data = parseLocalStorage("scheduleDetails");

  // map through data if exist
  return (
    <SectionContainer label="Timetable">
      <motion.div
        variants={stagger}
        className="grid grid-cols-5 gap-[11px] mt-2"
      >
        {data &&
          data.map((day: any) => {
            return (
              <motion.div variants={popUp} key={day.id}>
                <OnTapHover>
                  <Link to={`${day.id}`}>
                    <div onClick={open} className="box px-2">
                      <p className="text-s text-center">{day.day}</p>
                    </div>
                  </Link>
                </OnTapHover>
              </motion.div>
            );
          })}

        <OnTapHover>
          <Link to="/addSchedule">
            <motion.div variants={popUp} className="box px-2">
              <MdAdd className="w-5 h-5 mx-auto" />
            </motion.div>
          </Link>
        </OnTapHover>

        <ModalLoader>
          {modalOpen && <ViewSchedule handleClose={close} />}
        </ModalLoader>
      </motion.div>
    </SectionContainer>
  );
};

export default TimeTable;
