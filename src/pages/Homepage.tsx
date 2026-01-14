import type { ClassValue } from "clsx";

import { Details } from "@/components/home/sections/Details";

const sectionsStyles: ClassValue = "px-4 py-2";

export const Homepage = () => {
  return (
    <main className="flex min-h-screen flex-col p-4 md:flex-row">
      <Details className={sectionsStyles} />
      <div className="divider md:divider-horizontal" />
      <Details className={sectionsStyles} />
    </main>
  );
};
