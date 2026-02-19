import { Outlet } from "react-router";

export const Viewer = () => (
  <article
    className="aspect-4/3 bg-amber-600 shadow-lg"
    style={{
      width: "min(100vw, calc(100vh * 4 / 3))",
      height: "min(100vh, calc(100vw * 3 / 4))",
    }}
    // TODO: this CSS was vibecoded, check out if there's a better approach later
  >
    <Outlet />
  </article>
);
