import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { MdOutlineClose, MdEdit } from "react-icons/md";

import { BackDrop, IconMotionBtn } from "../../components";
import { parseLocalStorage } from "../../helper";
import { popUp } from "../../animations";

const ViewSchedule = ({ handleClose }: any) => {
  const { scheduleId } = useParams();
  const data = parseLocalStorage("scheduleDetails");

  return (
    <BackDrop onClose={handleClose} style="items-center">
      <motion.article
        onClick={e => e.stopPropagation()}
        variants={popUp}
        initial="initial"
        animate="animate"
        exit="exit"
        className="max-w-sm mx-auto w-full py-6 px-0 box bg-gray-800"
      >
        {data
          .filter((day: any) => day.id === scheduleId)
          .map((schedule: any) => {
            return (
              <div key={schedule.id}>
                <h2 className="mb-6 px-6 font-semibold">{schedule.day}</h2>

                {schedule.classes ? (
                  schedule.classes.map((subject: any) => {
                    return (
                      <div key={subject.id}>
                        <ViewScheduleContainer>
                          <p className="mb-[9px] text-xs">{subject.code}</p>
                          <p className="mb-[9px] text-s font-medium">
                            {subject.name}{" "}
                          </p>
                          <p className="text-s">
                            {subject.start} to {subject.end}
                          </p>
                        </ViewScheduleContainer>
                      </div>
                    );
                  })
                ) : (
                  <ViewScheduleContainer>
                    <p className="mb-[9px] text-s font-medium">
                      No classes yet
                    </p>
                  </ViewScheduleContainer>
                )}
                <div className="flex justify-center gap-[14px] mt-5">
                  <IconMotionBtn>
                    <MdOutlineClose onClick={handleClose} />
                  </IconMotionBtn>
                  <IconMotionBtn>
                    <Link to={`/${scheduleId}/editSchedule`}>
                      <MdEdit />
                    </Link>
                  </IconMotionBtn>
                </div>
              </div>
            );
          })}
      </motion.article>
    </BackDrop>
  );
};

export default ViewSchedule;

interface containerIn {
  children: any;
  key?: number;
}

const ViewScheduleContainer = ({ children }: containerIn) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: "rgb(255, 255, 255, 0.24)",
      }}
      whileTap={{
        scale: 0.98,
        backgroundColor: "rgb(255, 255, 255, 0.24)",
      }}
      className="mx-[6px] px-[18px] py-[15px] rounded-[10px]"
    >
      {children}
    </motion.div>
  );
};
