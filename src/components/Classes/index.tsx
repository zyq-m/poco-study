import { motion } from "framer-motion";
import { SectionContainer, OnTapHover } from "../../components";
import { parseLocalStorage } from "../../helper";
import { popUp, stagger } from "../../animations";
import { useDate } from "../../hooks";

const Classes = () => {
  const { day } = useDate();
  const scheduleDetails = parseLocalStorage("scheduleDetails");
  const schedule = scheduleDetails && filterDay(scheduleDetails, day);

  return (
    <SectionContainer label="Today classes">
      <motion.div
        variants={stagger}
        className="grid grid-cols-2 gap-[9px] mt-2"
      >
        {scheduleDetails ? (
          schedule.map((detail: any) =>
            detail.classes.map((subject: any) => {
              return (
                <motion.div variants={popUp} key={subject.id}>
                  <OnTapHover>
                    {subject.link.length < 5 ? (
                      <a href="#">
                        <div className="box">
                          <p className="text-s">{subject.name}</p>
                          <p className="mt-5 text-xs text-right">
                            {subject.start}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <a href={subject.link} target="_blank">
                        <div className="box">
                          <p className="text-s">{subject.name}</p>
                          <p className="mt-5 text-xs text-right">
                            {subject.start}
                          </p>
                        </div>
                      </a>
                    )}
                  </OnTapHover>
                </motion.div>
              );
            })
          )
        ) : (
          <div className="col-span-2">
            <OnTapHover>
              <div className="box">
                <p className="text-s">Add timetable</p>
              </div>
            </OnTapHover>
          </div>
        )}
        {scheduleDetails && schedule.length === 0 && (
          <div className="col-span-2">
            <OnTapHover>
              <div className="box">
                <p className="text-s">No classes for today</p>
              </div>
            </OnTapHover>
          </div>
        )}
      </motion.div>
    </SectionContainer>
  );
};

export default Classes;

const filterDay = (arr: [], day: string) => {
  return arr.filter(
    (schedule: any) =>
      schedule.day.toLowerCase().indexOf(day.toLowerCase()) !== -1
  );
};
