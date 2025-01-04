import React from "react";
import Image from "next/image";
import ReactIcon from "@/assets/icons/react.svg";

const frontendSkills = [
  {
    name: "React",
    src: ReactIcon,
  },
  {
    name: "Angular",
    src: ReactIcon,
  },
  {
    name: "Vue",
    src: ReactIcon,
  },
];

export default function SkillsSection() {
  return (
    <section className="py-8 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Frontend Skills
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          {frontendSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <div className="w-10 h-10 flex-shrink-0">
                <Image
                  src={skill.src}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>

              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
