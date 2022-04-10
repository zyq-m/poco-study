import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, AddSchedule } from "./pages";
import { ViewSchedule } from "./components";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":scheduleId" element={<Home />} />
        </Route>
        <Route path="/addSchedule" element={<AddSchedule />} />
        <Route path="/:scheduleId/editSchedule" element={<AddSchedule />} />
        <Route
          path="/:scheduleId/editSchedule/:subjectId/editSubject"
          element={<AddSchedule />}
        />
      </Routes>
    </Router>
  );
};

export default App;
