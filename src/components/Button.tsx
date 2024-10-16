import React, { FC } from 'react'

interface ButtonInterface {
  children: React.ReactNode,
}

const Button: FC<ButtonInterface> = ({children}) => {
  return <button className='relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190D2E] to-[#4A208A] shadow-[0px_0px_12px_#8c45ff] '>
    <div className='absolute inset-0'>
      <div className="border border-white/15 rounded-lg absolute  inset-0 "></div>
      <div className='absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(140,69,255,0.7)_inset] '></div>
    </div>
    <span>{children}</span>
  </button>
}

export default Button