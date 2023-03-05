import { Routes, Route } from "react-router-dom";

import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
