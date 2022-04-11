import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import uniqid from "uniqid";

import { BackDrop, Form, OnTapHover } from "../../components";

import { slideUp } from "../../animations";

import {
  parseLocalStorage,
  initializeLocalStorage,
  updateSchedules,
  updateLocalStorage,
  removeSubject,
} from "../../helper";

const ScheduleForm = ({ handleClose }: any) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [link, setLink] = useState("");

  const { subjectId, scheduleId } = useParams();
  const navigate = useNavigate();
  const schedules = parseLocalStorage("scheduleDetails");

  const filteredClass =
    schedules && filterClass(schedules, scheduleId, subjectId);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (scheduleId || subjectId) {
      // update subject
      const updateDetails = updateSchedules({
        scheduleId: scheduleId,
        subjectId: subjectId,
        subjectName: name,
        code: code,
        start: start,
        end: end,
        link: link,
      });

      updateLocalStorage("scheduleDetails", updateDetails);

      // go back
      navigate(`/${scheduleId}/editSchedule`);

      if (subjectId === undefined) {
        let arr = {
          id: uniqid(),
          name: name,
          code: code,
          start: start,
          end: end,
          link: link,
        };

        const addSubject = updateSchedules({
          scheduleId: scheduleId,
          newSubject: true,
          subjectObj: arr,
        });

        updateLocalStorage("scheduleDetails", addSubject);
      }
    } else {
      const classDetails = {
        id: uniqid(),
        name: name,
        code: code,
        start: start,
        end: end,
        link: link,
      };

      initializeLocalStorage("classDetails", classDetails);
    }
    closeAfter(handleClose);
  };

  const deleteSubject = () => {
    const remainingSubject: any = removeSubject({
      scheduleId: scheduleId,
      subjectId: subjectId,
      arr: schedules,
    });

    const mergeSchedule = updateSchedules({
      scheduleId: scheduleId,
      filteredSubjects: remainingSubject[0].classes,
    });

    updateLocalStorage("scheduleDetails", mergeSchedule);

    setTimeout(() => {
      handleClose();
      navigate(`/${scheduleId}/editSchedule`);
    }, 100);
  };

  const onClose = () => {
    handleClose();

    scheduleId &&
      setTimeout(() => {
        handleClose();
        navigate(`/${scheduleId}/editSchedule`);
      }, 100);
  };

  useEffect(() => {
    if (subjectId) {
      setName(filteredClass[0][0].name);
      setCode(filteredClass[0][0].code);
      setStart(filteredClass[0][0].start);
      setEnd(filteredClass[0][0].end);
      setLink(filteredClass[0][0].link);
    }
  }, []);

  return (
    <BackDrop onClose={onClose} style="items-end px-0">
      <motion.section
        onClick={e => e.stopPropagation()}
        variants={slideUp}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed-w w-full px-4 py-[52px] rounded-t-2xl bg-gray-800"
      >
        <form onSubmit={handleSubmit}>
          <Form label="Name">
            <input
              type="text"
              id="name"
              placeholder="e.g. Mathematic"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              className="form"
            />
          </Form>

          <Form label="Subject code" style="mt-4">
            <input
              type="text"
              id="code"
              required
              value={code}
              onChange={e => setCode(e.target.value)}
              className="form"
            />
          </Form>

          <div className="flex gap-[9px]">
            <Form label="Start" style="mt-4 w-full">
              <input
                type="time"
                id="start"
                placeholder="e.g. 10:00am"
                required
                value={start}
                onChange={e => setStart(e.target.value)}
                className="form"
              />
            </Form>
            <Form label="End" style="mt-4 w-full">
              <input
                type="time"
                id="end"
                placeholder="e.g. 1:00pm"
                required
                value={end}
                onChange={e => setEnd(e.target.value)}
                className="form"
              />
            </Form>
          </div>

          <Form label="Link (optional)" style="mt-4">
            <input
              type="text"
              id="link"
              placeholder="https://yourclass.com"
              value={link}
              onChange={e => setLink(e.target.value)}
              className="form"
            />
          </Form>

          <OnTapHover>
            <button
              type="submit"
              className="btn mt-6 py-[18px] bg-btn-success rounded-2xl"
            >
              Done
            </button>
          </OnTapHover>

          {scheduleId ? (
            <button
              onClick={deleteSubject}
              className="btn mt-5 text-btn-danger"
            >
              Delete
            </button>
          ) : (
            <button
              type="reset"
              onClick={handleClose}
              className="btn mt-5 text-btn-danger"
            >
              Cancel
            </button>
          )}
        </form>
      </motion.section>
    </BackDrop>
  );
};

export default ScheduleForm;

const filterClass = (arr: [], scheduleId: any, subjectId: any) => {
  let data;

  if (scheduleId !== undefined && subjectId !== undefined) {
    data = arr
      .filter((filter: any) => filter.id === scheduleId)
      .map((filter: any) =>
        filter.classes.filter((subject: any) => subject.id === subjectId)
      );
  } else {
    data = undefined;
  }

  return data;
};

const closeAfter = (close: any) =>
  setTimeout(() => {
    close();
  }, 100);
