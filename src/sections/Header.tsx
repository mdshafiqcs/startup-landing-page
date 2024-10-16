import { LogoIcon, MenuIcon } from "@/assets/icons";
import { Button } from "@/components";

export const Header = () => {
  return <header className='py-4 border-b border-white/20 md:border-none sticky z-10 '>
  <div className='container '>
    <div className='flex justify-between items-center md:border border-white/20 md:p-2.5 rounded-xl max-w-2xl mx-auto backdrop:blur '>
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
        <Button>Join waitlist</Button>
        <MenuIcon className='md:hidden' />
      </div>
    </div>
  </div>
</header>
};
