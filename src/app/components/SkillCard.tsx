import React from "react";
import Image from "next/image";

interface Skill {
  name: string;
  src: string;
}

interface SkillsCardProps {
  title: string;
  list: Skill[];
}

export default function SkillsCard({ list, title }: SkillsCardProps) {
  return (
    <div className="select-none block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 skills-card">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        {title}
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {list.map((skill, index) => (
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
  );
}
