"use client";

import { acmeLogo, apexLogo, celestialLogo, echoLogo, pulseLogo, quantumLogo } from "@/assets/images";
import Image from "next/image";
import { motion } from "framer-motion";


const logos = [
  {
    src: acmeLogo,
    alt: "Acme Logo"
  },
  {
    src: apexLogo,
    alt: "Apex Logo"
  },
  {
    src: celestialLogo,
    alt: "Celestial Logo"
  },
  {
    src: echoLogo,
    alt: "Echo Logo"
  },
  {
    src: pulseLogo,
    alt: "Pulse Logo"
  },
  {
    src: quantumLogo,
    alt: "Quantum Logo"
  },
]


export const LogoTicker = () => {
  return <section className='py-20 md:py-24'>
    <div className='container'>
      <div className='flex items-center gap-5'>
        <div className='flex-1 md:flex-none'>
          <h2>Trusted by to innovative teams</h2>
        </div>
        <div className='flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
          <motion.div 
            className='flex flex-none gap-14 pr-14'
            
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
              {
                logos.concat(logos).map(({src, alt}, index) => (
                  <Image src={src} alt={alt} key={index} className='flex-none h-6 w-auto ' />
                ))
              }
              {
                logos.concat(logos).map(({src, alt}, index) => (
                  <Image src={src} alt={alt} key={index} className='flex-none h-6 w-auto ' />
                ))
              }
          </motion.div>
        </div>
        
      </div>
    </div>
  </section>;
};
