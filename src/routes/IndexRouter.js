import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const IndexRouter = () => {
    return (
      <Routes>
        <Route path="/JuliXnCXm" element={<Home />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    );
};

export default IndexRouter;
