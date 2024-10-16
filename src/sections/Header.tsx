import { LogoIcon, MenuIcon } from "@/assets/icons";

export const Header = () => {
  return <header className='py-4 border-b border-white/20 md:border-none '>
  <div className='container '>
    <div className='flex justify-between items-center md:border border-white/20 md:p-2.5 rounded-xl max-w-2xl mx-auto '>
      <div>
        <div className='border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/20 '>
          <LogoIcon className='h-8 w-8' />
        </div>
      </div>
      <div className='hidden md:block'>
        <nav className='flex gap-8 text-white/70 text-sm'>
          <a href="#" className='hover:text-white transition'>Features</a>
          <a href="#" className='hover:text-white transition'>Developers</a>
          <a href="#" className='hover:text-white transition'>Pricing</a>
          <a href="#" className='hover:text-white transition'>Changelog</a>
        </nav>
      </div>
      <div className='flex items-center gap-4'>
        <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190D2E] to-[#4A208A] shadow-[0px_0px_12px_#8c45ff] '>
          <div className='absolute inset-0'>
            <div className="border border-white/15 rounded-lg absolute  inset-0 "></div>
            <div className='absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(140,69,255,0.7)_inset] '></div>
          </div>
          <span>Join waitlist</span>
        </button>
        <MenuIcon className='md:hidden' />
      </div>
    </div>
  </div>
</header>
};
