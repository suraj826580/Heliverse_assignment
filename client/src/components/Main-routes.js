import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import SingleCard from "./SingleCard";
import CreateUser from "./Create-User";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/:id" element={<SingleCard />} />
      <Route path="/create-user" element={<CreateUser />} />
    </Routes>
  );
}
