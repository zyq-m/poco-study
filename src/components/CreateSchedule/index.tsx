import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import uniqid from "uniqid";

import {
  IconMotionBtn,
  ModalLoader,
  Form,
  AddSubject,
  ScheduleForm,
  OnTapHover,
  ConfirmationPopUp,
} from "..";
import { useModal, useWarning } from "../../hooks";
import { MdAdd } from "react-icons/md";

import {
  initializeLocalStorage,
  parseLocalStorage,
  clearLocalStorage,
  updateSchedules,
  updateLocalStorage,
  removeSchedule,
} from "../../helper";

import { fadeUp, stagger } from "../../animations";

const CreateSchedule = ({ scheduleId }: any) => {
  const { modalOpen, open, close } = useModal();
  const { warning, openWarning, closeWarning } = useWarning();

  const navigate = useNavigate();

  const [dayInput, setDayInput] = useState("");
  const dayRef = useRef<HTMLInputElement>(null);
  const schedules = parseLocalStorage("scheduleDetails");
  const classDetails = parseLocalStorage("classDetails");

  const filteredSchedule: any =
    schedules && filterSchedule(schedules, scheduleId);

  const submitSchedule = () => {
    if (dayInput.length === 0) {
      alert("Please input day");
      return dayRef.current?.focus();
    }

    if (classDetails === null) {
      return alert("Please add atleast a subject");
    }

    const scheduleDetails = {
      id: uniqid(),
      day: dayInput,
      classes: classDetails,
    };

    initializeLocalStorage("scheduleDetails", scheduleDetails);
    clearLocalStorage("classDetails");

    setTimeout(() => {
      navigate("/");
    }, 100);
  };

  const updateDay = () => {
    if (dayInput.length === 0) {
      alert("Please input day");
      return dayRef.current?.focus();
    }

    if (filteredSchedule[0].classes.length === 0) {
      return alert("Please add atleast a subject");
    }

    const updateDetails = updateSchedules({
      scheduleId: scheduleId,
      day: dayInput,
    });

    updateLocalStorage("scheduleDetails", updateDetails);

    setTimeout(() => {
      navigate("/");
    }, 100);
  };

  const deleteSchedule = () => {
    const remaining: any = removeSchedule({
      scheduleId: scheduleId,
      arr: schedules,
    });

    updateLocalStorage("scheduleDetails", remaining);

    setTimeout(() => {
      navigate("/");
    }, 100);
  };

  const cancelAdd = () => {
    clearLocalStorage("classDetails");
    navigate("/");
  };

  const onNo = (): void => {
    closeWarning();
    setTimeout(() => {
      navigate("/");
    }, 100);
  };

  useEffect(() => {
    // initializeLocalStorage("scheduleDetails", data);
    if (scheduleId) {
      setDayInput(filteredSchedule[0].day);
    }
  }, []);

  return (
    <motion.section variants={stagger}>
      <motion.div variants={fadeUp}>
        <h2 className="font-semibold">Create schedule</h2>
        <form onSubmit={e => e.preventDefault()}>
          <Form label="Day" style="mt-6">
            <input
              type="text"
              id="Day"
              placeholder="e.g. Sun"
              required
              ref={dayRef}
              value={dayInput}
              onChange={e => setDayInput(e.target.value)}
              maxLength={3}
              className="form"
            />
          </Form>
        </form>
      </motion.div>

      <motion.div variants={fadeUp} className="form-wrapper mt-6">
        <label htmlFor="subject" className="text-xs">
          Subjects
        </label>
        <div id="subject" className="grid gap-[9px]">
          {filteredSchedule ? (
            <AddSubject data={filteredSchedule[0].classes} />
          ) : (
            <AddSubject />
          )}
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="flex justify-center mt-4">
        <IconMotionBtn>
          <MdAdd onClick={open} className="w-5 h-5 fill-gray-400" />
        </IconMotionBtn>
      </motion.div>

      <motion.div variants={fadeUp}>
        {scheduleId ? (
          <>
            <OnTapHover>
              <CtaBtn action={updateDay}>Save</CtaBtn>
            </OnTapHover>
            <button onClick={openWarning} className="btn mt-5 text-btn-danger">
              Delete
            </button>
          </>
        ) : (
          <>
            <OnTapHover>
              <CtaBtn action={submitSchedule}>Add</CtaBtn>
            </OnTapHover>
            <button onClick={cancelAdd} className="btn mt-5 text-btn-danger">
              Cancel
            </button>
          </>
        )}
      </motion.div>

      <ModalLoader>
        {modalOpen && <ScheduleForm handleClose={close} />}
        {warning && (
          <ConfirmationPopUp
            handleClose={closeWarning}
            onYes={deleteSchedule}
            onNo={onNo}
          />
        )}
      </ModalLoader>
    </motion.section>
  );
};

export default CreateSchedule;

const CtaBtn = ({ action, children }: any) => {
  return (
    <button
      onClick={action}
      type="submit"
      className="btn mt-6 py-[18px] bg-btn-success rounded-2xl"
    >
      {children}
    </button>
  );
};

const filterSchedule = (arr: [], id: any) => {
  let data;

  if (id !== undefined) {
    data = arr.filter((filter: any) => filter.id === id);
  } else {
    data = undefined;
  }

  return data;
};
