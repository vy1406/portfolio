
import Image from "next/image";
import Hero from "./components/Hero";
import Timelines from "./components/Timeline";
import SkillsSection from "./components/Skills";


export default function Home() {
  return (
    <div>

    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <Hero />
      <Timelines />
      <SkillsSection />
    </div>
  );
}
