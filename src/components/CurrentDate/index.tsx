import { motion } from "framer-motion";
import { OnTapHover } from "../../components";
import { useDate } from "../../hooks";
import { popUp } from "../../animations";

const CurrentDate = () => {
  const { date } = useDate();

  return (
    <motion.div variants={popUp}>
      <OnTapHover>
        <section className="pb-7 box">
          <label htmlFor="date" className="text-xs">
            Today
          </label>
          <h1 id="date" className="mt-[18px] text-l">
            {date}
          </h1>
        </section>
      </OnTapHover>
    </motion.div>
  );
};

export default CurrentDate;
