import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import { Homepage } from "@/pages/Homepage.tsx";
import { NotFound } from "@/pages/NotFound.tsx";
import { SlideshowViewer } from "@/pages/SlideshowViewer";
import { Slide1 } from "$/slide01";

// https://omarelhawary.me/blog/file-based-routing-with-react-router/
// https://vite.dev/guide/features#glob-import

const dynamicSlidesImport = import.meta.glob("./**/*.tsx", {
  base: "/content",
  eager: true,
});
console.log(dynamicSlidesImport);

const generateDynamicRoutes = () => {
  const routes = Object.entries(dynamicSlidesImport).map(([route, module]) => {
    const path = route.replace(/\.\/|\/index|\.tsx/g, "");
    // This strips './', '/index' and '.tsx'
    // '$/slide01/index.tsx' takes precedence over `$/slide01`

    const Component = module;

    return {
      path,
      element: Component,
    };
  });
  return routes;
};

export const DecksRouter = () => {
  const dynamicRoutes = generateDynamicRoutes();
  console.log(dynamicRoutes);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="viewer" element={<SlideshowViewer />}>
          <Route path="slide1" element={<Slide1 />} />
          {dynamicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
