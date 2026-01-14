import { cn } from "@/lib/utils";

type DetailSectionProps = {
  className?: string;
};

export const Details = ({ className }: DetailSectionProps) => (
  <div className={cn("md:w-1/4", className)}>
    <div className="card card-border shadow-sm">
      <div className="card-body">
        <h2 className="card-title">Project Details</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          delectus odio, magni pariatur nihil voluptas! Voluptatum a fugiat
          velit, illo cumque vel tempora quis.
        </p>
      </div>
    </div>
  </div>
);
