import { motion } from "framer-motion";
import { Link, useParams, useNavigate } from "react-router-dom";
import { MdOutlineClose, MdEdit } from "react-icons/md";

import { BackDrop, IconMotionBtn } from "../../components";
import { parseLocalStorage } from "../../helper";
import { fadeOut } from "../../animations";

const ViewSchedule = ({ handleClose }: any) => {
  const { scheduleId } = useParams();
  const navigate = useNavigate();
  const data = parseLocalStorage("scheduleDetails");

  const onClose = () => {
    handleClose();

    scheduleId &&
      setTimeout(() => {
        handleClose();
        navigate("/");
      }, 100);
  };

  return (
    <BackDrop onClose={onClose} style="items-center">
      <motion.article
        onClick={e => e.stopPropagation()}
        variants={fadeOut}
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
                        {subject.link.length < 5 ? (
                          <a href="#">
                            <ViewScheduleContainer>
                              <p className="mb-[9px] text-xs">{subject.code}</p>
                              <p className="mb-[9px] text-s font-medium">
                                {subject.name}{" "}
                              </p>
                              <p className="text-s">
                                {subject.start} to {subject.end}
                              </p>
                            </ViewScheduleContainer>
                          </a>
                        ) : (
                          <a href={subject.link} target="_blank">
                            <ViewScheduleContainer>
                              <p className="mb-[9px] text-xs">{subject.code}</p>
                              <p className="mb-[9px] text-s font-medium">
                                {subject.name}{" "}
                              </p>
                              <p className="text-s">
                                {subject.start} to {subject.end}
                              </p>
                            </ViewScheduleContainer>
                          </a>
                        )}
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
                    <MdOutlineClose onClick={onClose} />
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
