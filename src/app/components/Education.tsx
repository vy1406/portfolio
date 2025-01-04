"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
    {
        school: "University of Washington",
        degree: "Bachelor of Science in Computer Science",
        startDate: "September 2015",
        endDate: "June 2019",
        description:
            "Studied computer science and software engineering. Developed software applications and systems. Graduated with a 3.9 GPA.",
    },
    {
        school: "Elevation",
        degree: "Certificate in Full-Stack Web Development",
        startDate: "September 2015",
        endDate: "June 2019",
        description:
            "Studied computer science and software engineering. Developed software applications and systems. Graduated with a 3.9 GPA.",
    },
];

export default function Education() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cards = sectionRef.current?.querySelectorAll(".education-card");

        if (cards) {
            gsap.from(cards, {
                x: (i: number) => (i % 2 === 0 ? 200 : -200),
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 65%",
                    toggleActions: "play none none none",
                },
            });

        }
    }, []);

    return (
        <div ref={sectionRef} className="py-12 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                    Education
                </h2>
                <div className="space-y-12">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className={`education-card flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            <div className="md:w-1/2 p-6 bg-white rounded-lg shadow-md border dark:bg-gray-800 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                                    {edu.school}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                    {edu.degree}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {edu.startDate} - {edu.endDate}
                                </p>
                                <p className="mt-4 text-gray-600 dark:text-gray-300">
                                    {edu.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
