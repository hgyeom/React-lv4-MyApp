import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Header from "../components/Header/Header";
import Write from "../components/Form/Write";
import Modify from "../components/Form/Modify";
function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/modify/:id" element={<Modify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
