import { BrowserRouter, Route, Routes } from "react-router";

import { Homepage } from "@/pages/Homepage.tsx";
import { NotFound } from "@/pages/NotFound.tsx";
import { SlideshowViewer } from "@/pages/SlideshowViewer";

export const DecksRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/viewer" element={<SlideshowViewer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
