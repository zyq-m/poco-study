export const parseLocalStorage = (item: string) => {
  const data = localStorage.getItem(item);
  const parseData = data && JSON.parse(data);

  return parseData;
};

export const initializeLocalStorage = (item: string, obj: {}) => {
  // check wether exist previous local storage
  // push to prevLocalStorage[]
  // store in local storage

  let prevLocalStorage = parseLocalStorage(item) || [];

  prevLocalStorage.push(obj);
  localStorage.setItem(item, JSON.stringify(prevLocalStorage));
};

export const clearLocalStorage = (item: string) =>
  localStorage.removeItem(item);

interface schedule {
  scheduleId?: string;
  subjectId?: string;
  day?: string;
  subjectName?: string;
  code?: string;
  start?: string;
  end?: string;
  link?: string;
  newSubject?: boolean;
  subjectObj?: {};
  filteredSubjects?: [];
}
export const updateSchedules = ({
  scheduleId,
  subjectId,
  day,
  subjectName,
  code,
  start,
  end,
  link,
  newSubject,
  subjectObj,
  filteredSubjects,
}: schedule) => {
  const schedules = parseLocalStorage("scheduleDetails");

  schedules
    .filter((schedule: any) => schedule.id === scheduleId)
    .map((schedule: any) => {
      // update day
      if (day !== undefined) return (schedule.day = day);

      // add new subject
      if (newSubject) {
        const subjectArr = schedule.classes;
        subjectArr.push(subjectObj);

        return subjectArr;
      }

      // add filteredSubjects
      if (filteredSubjects !== undefined)
        return (schedule.classes = filteredSubjects);

      // update subjectDetail
      if (subjectId !== undefined)
        return schedule.classes
          .filter((subjectDetails: any) => subjectDetails.id === subjectId)
          .map((subjectDetails: any) => {
            // update subject name
            if (subjectName !== undefined) subjectDetails.name = subjectName;

            // update subject name
            if (code !== undefined) subjectDetails.code = code;

            // update subject start
            if (start !== undefined) subjectDetails.start = start;

            // update subject end
            if (end !== undefined) subjectDetails.end = end;

            // update link
            if (link !== undefined) subjectDetails.link = link;
          });
    });

  return schedules;
};

export const updateLocalStorage = (item: string, arr: []): void => {
  // clear local storage
  // initialize new local storage

  clearLocalStorage(item);
  localStorage.setItem(item, JSON.stringify(arr));
};

interface deleteIn {
  scheduleId?: string;
  subjectId?: string;
  arr: [];
}
export const removeSchedule = ({ scheduleId, arr }: deleteIn) => {
  if (scheduleId !== undefined) {
    return arr.filter((schedule: any) => schedule.id !== scheduleId);
  }
};

export const removeSubject = ({ scheduleId, subjectId, arr }: deleteIn) => {
  if (scheduleId !== undefined && subjectId !== undefined) {
    const filteredSubject = arr
      .filter((schedule: any) => schedule.id === scheduleId)
      .map((schedule: any) => {
        const filtered = schedule.classes.filter(
          (subject: any) => subject.id !== subjectId
        );

        return {
          id: schedule.id,
          day: schedule.day,
          classes: filtered,
        };
      });

    return filteredSubject;
  }
};
