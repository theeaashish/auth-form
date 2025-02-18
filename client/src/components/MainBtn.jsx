import React from 'react'

const MainBtn = ({type, name}) => {
  return (
    <button type={type} className="w-[50vw] h-[64px] bg-[var(--secondry-text)] rounded-[8px] font-bold hover:bg-[#4AB7F0] cursor-pointer transition-all">
          {name}
    </button>
  )
}

export default MainBtn
