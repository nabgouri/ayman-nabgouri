import Reveal from "../util/Reveal";

const PRIMARY = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"];
const ADJACENT = [
  "Prisma",
  "Postgres",
  "Framer Motion",
  "shadcn/ui",
  "Redux",
  "WebSocket",
];

export const Stats = () => {
  return (
    <Reveal width="w-full">
      <div className="space-y-8">
        <div>
          <h3 className="text-xs uppercase tracking-[0.18em] text-fg-dim mb-4">
            Daily
          </h3>
          <ul className="space-y-2">
            {PRIMARY.map((tool) => (
              <li
                key={tool}
                className="font-display text-xl text-fg leading-snug"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-[0.18em] text-fg-dim mb-4">
            Working knowledge
          </h3>
          <ul className="space-y-1.5">
            {ADJACENT.map((tool) => (
              <li key={tool} className="text-base text-fg-muted">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
};
