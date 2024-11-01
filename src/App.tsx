import { Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import PersonalInfo from "./pages/PersonalInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
      </Routes>
    </>
  );
}

export default App;
