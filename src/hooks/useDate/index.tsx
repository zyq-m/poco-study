import { useState, useEffect } from "react";
import moment from "moment";

const useDate = () => {
  const getDate = () => moment().format("ddd, DD MMM YYYY");
  const getDay = () => moment().format("ddd");

  const [date, setDate] = useState(getDate());
  const [day, setDay] = useState(getDay());

  useEffect(() => {
    setTimeout(() => {
      getDate();
      getDay();
    }, 86400000);
  }, [date]);

  return { date, day };
};

export default useDate;
