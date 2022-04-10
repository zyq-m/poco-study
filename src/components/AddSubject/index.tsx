import { useParams, Link } from "react-router-dom";
import { OnTapHover, ModalLoader, ScheduleForm } from "../../components";
import { useModal } from "../../hooks";

import { MdOutlineNavigateNext } from "react-icons/md";

import { parseLocalStorage } from "../../helper";

const AddSubject = ({ data }: any) => {
  const { scheduleId } = useParams();
  const { modalOpen, open, close } = useModal();

  const subjects = parseLocalStorage("classDetails");

  return (
    <>
      <div className="grid gap-[9px]">
        {subjects &&
          subjects.map((subject: any) => {
            return (
              <OnTapHover key={subject.id}>
                <div className="px-[15px] py-[18px] box flex items-center justify-between">
                  <p className="text-s">{subject.name}</p>
                  <MdOutlineNavigateNext />
                </div>
              </OnTapHover>
            );
          })}
        {data &&
          data.map((subject: any) => {
            return (
              <OnTapHover key={subject.id}>
                <Link
                  to={`/${scheduleId}/editSchedule/${subject.id}/editSubject`}
                >
                  <div
                    onClick={open}
                    className="px-[15px] py-[18px] box flex items-center justify-between"
                  >
                    <p className="text-s">{subject.name}</p>
                    <MdOutlineNavigateNext />
                  </div>
                </Link>
              </OnTapHover>
            );
          })}
      </div>
      <ModalLoader>
        {modalOpen && <ScheduleForm handleClose={close} />}
      </ModalLoader>
    </>
  );
};

export default AddSubject;
