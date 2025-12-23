import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Use at work</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>JavaScript</Chip>
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>React</Chip>
            <Chip>Next.js</Chip>
            <Chip>TypeScript</Chip>
            <Chip>Node.js</Chip>
            <Chip>Tailwind CSS</Chip>
            <Chip>React Router</Chip>
            <Chip>Redux</Chip>
            <Chip>Framer Motion</Chip>
            <Chip>Git</Chip>
            <Chip>GitHub</Chip>
            <Chip>GitLab</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
