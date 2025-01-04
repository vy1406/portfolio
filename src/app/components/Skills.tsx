"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DATA } from "../../data";
import SkillsCard from "./SkillCard";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const cards = sectionRef.current?.querySelectorAll(".skills-card");
  
      if (cards) {
        gsap.from(cards, {
          x: 200, 
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
        <section className="py-8 bg-gray-100 dark:bg-gray-900"  ref={sectionRef}>
            <SkillsCard list={DATA.skills.frontEnd.list} title={DATA.skills.frontEnd.title}/>
            <SkillsCard list={DATA.skills.frontEnd.list} title={DATA.skills.frontEnd.title}/>
        </section>
    );
}
