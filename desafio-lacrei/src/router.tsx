import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../src/Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Professional from "./Pages/Professional/Professional";
import UserPerson from "./Pages/UserPerson/UserPerson";

const AppRouter: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Professional" element={<Professional />} />
        <Route path="/UserPerson" element={<UserPerson />} />
      </Routes>
    </Layout>
  );
};

export default AppRouter;
