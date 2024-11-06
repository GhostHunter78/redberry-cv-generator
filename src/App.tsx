import { Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import PersonalInfo from "./pages/PersonalInfo";
import Experience from "./pages/Experience";
import { FormDataProvider } from "./Context/FormDataContext";
import Education from "./pages/Education";

function App() {
  return (
    <>
      <FormDataProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </FormDataProvider>
    </>
  );
}

export default App;
