import { LogoIcon, SocialInsta, SocialX, SocialYoutube } from "@/assets/icons";


export const Footer = () => {
  return <footer className='py-5 border-t border-white/15 '>
    <div className='container'>
      <div className='flex flex-col lg:flex-row lg:items-center gap-8'>
        <div className='flex gap-2 items-center lg:flex-1 '>
          <LogoIcon className='h6 w-6' />
          <div className='font-medium'>AI Startup</div>
        </div>

        <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
          <a href="#" className='text-white/70 hover:text-white transition text-xs md:text-sm '>Features</a>
          <a href="#" className='text-white/70 hover:text-white transition text-xs md:text-sm '>Developers</a>
          <a href="#" className='text-white/70 hover:text-white transition text-xs md:text-sm '>Company</a>
          <a href="#" className='text-white/70 hover:text-white transition text-xs md:text-sm '>Blog</a>
          <a href="#" className='text-white/70 hover:text-white transition text-xs md:text-sm '>Changelog</a>
        </nav>

        <div className='flex gap-5 lg:flex-1 lg:justify-end'>
          <SocialX className='text-white/40 hover:text-white transition' />
          <SocialInsta className='text-white/40 hover:text-white transition' />
          <SocialYoutube className='text-white/40 hover:text-white transition' />
        </div>
        
      </div>
    </div>
   
  </footer>;
};
