"use client";

import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player"
import { productImage } from "@/assets/images";
import Image from "next/image";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import { animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition } from "framer-motion";


const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (props: typeof tabs[number] & ComponentPropsWithoutRef<'div'> & {selected: boolean}) => {

  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);
  const tabRef = useRef<HTMLDivElement>(null);

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if(!tabRef.current || !props.selected) return;

    xPercentage.set(0);
    yPercentage.set(0);

    const { height, width } = tabRef.current.getBoundingClientRect();
    
    const circumference = height * 2 + width * 2;

    const times = [0, width / circumference, (width + height) / circumference, (width * 2 + height) / circumference, 1];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    }
    animate(xPercentage, [0, 100, 100, 0, 0], options);

    animate(yPercentage, [0, 0, 100, 100, 0], options)

  }, [props.selected]);

  const handleTabHover = () => {
    if(dotLottieRef.current === null) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  }

  return <div 
    onClick={props.onClick}
    ref={tabRef} 
    onMouseEnter={handleTabHover} 
    className='border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center lg:flex-1 relative ' 
  >

  {/* animated border  */}
  {
    props.selected && (
      <motion.div 
        className='absolute inset-0 -m-px rounded-xl border border-[#A369FF] '
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      ></motion.div>
    )
  }
  
  {/* animated border  */}

  <div className='h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center'>
    <DotLottiePlayer 
      ref={dotLottieRef}
      src={props.icon} 
      autoplay 
      className='w-5 h-5'
  />
  </div>
  
  <div className="font-medium" >{props.title}</div>
  { props.isNew && (
    <div className='text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold ' >new</div>
  )}
</div>
}

export const Features = () => {

  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgrondSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgrondSizeX}% auto`;

  const handleSelectTab = (index: number) => {
    setSelectedTab(index);

    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(backgrondSizeX, [backgrondSizeX.get(), 100, tabs[index].backgroundSizeX], animateOptions);

    animate(backgroundPositionX, [backgroundPositionX.get(), tabs[index].backgroundPositionX], animateOptions);
    
    animate(backgroundPositionY, [backgroundPositionY.get(), tabs[index].backgroundPositionY], animateOptions);

  }

  return <section className='py-20 md:py-24'>
    <div className='container'>
      <h2 className='text-5xl md:text-6xl font-medium text-center tracking-tighter' >Elevate your SEO efforts</h2>
      <p className='text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5' >From small startups to large enterprises, our AI-driven tool has revolutionized the way businesses approach SEO.</p>

      {/* tabs start  */}
      <div className='mt-10 flex flex-col lg:flex-row gap-3 '>
        {
          tabs.map((tab, tabIndex) => (
            <FeatureTab 
            key={tab.title} 
            onClick={() => handleSelectTab(tabIndex)} 
            selected= {selectedTab === tabIndex}
            {...tab} 
            />
          ))
        } 
      </div>
      
      {/* tabls ends */}

      {/* product image  */}
      <div className='border border-white/20 p-2.5 rounded-xl mt-3 '>
        <motion.div 
        className="aspect-video bg-cover border border-white/20 rounded-lg "
        style={{
          backgroundPosition,
          backgroundSize,
          backgroundImage: `url(${productImage.src})`
        }} 
        ></motion.div>
      
      </div>


    </div>
  </section>;
};
