'use client'
import React from "react";
import Typewriter from "typewriter-effect";
import { DATA } from "../../data";
import HeroBackground from "@/assets/icons/heroBackground.svg";
import ReactIcon from "@/assets/icons/react.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[300px] w-full text-[#854CE6] flex items-center justify-center">
      <div className="absolute inset-0">
        <Image src={HeroBackground} alt="Profile" width={144} height={144} className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 flex items-center justify-center">
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#854CE6] shadow-lg">
          <Image src={ReactIcon} alt="Profile" width={144} height={144} />
        </div>
      </div>

      <div className="absolute bottom-4 w-full text-center z-20">
        <Typewriter
          options={{
            strings: DATA.roles,
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}
