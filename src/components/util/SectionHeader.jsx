import { Reveal } from "./Reveal";

export const SectionHeader = ({ title, dir = "r" }) => {
  return (
    <div
      className="flex items-center gap-6 md:gap-8 mb-12"
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className="w-full h-px bg-line" aria-hidden="true" />
      <h2 className="font-display whitespace-nowrap">
        <Reveal>
          <span className="text-3xl md:text-headline tracking-tight">
            {title}
            <span className="text-accent">.</span>
          </span>
        </Reveal>
      </h2>
    </div>
  );
};
