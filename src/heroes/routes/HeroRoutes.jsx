import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components";
import { HeroFooter } from "../components/HeroFooter";
import { DcPages, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPages />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:heroId" element={<HeroPage />} />

          <Route path="/" element={<Navigate to="marvel" />} />
        </Routes>
      </div>
      <HeroFooter />
    </>
  );
};
