export const Viewer = () => (
  <article
    className="aspect-4/3 rounded-md bg-neutral-900 text-white shadow-lg"
    style={{
      width: "min(100vw, calc(100vh * 4 / 3))",
      height: "min(100vh, calc(100vw * 3 / 4))",
    }}
  >
    <span>Lorem ipsum</span>
  </article>
);
