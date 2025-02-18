import React from "react";

const SocialBtn = ({src, alt, name}) => {
  return (
    <div className="w-full">
      <button className="btn-primary">
        <img
          src={src}
          alt={alt}
          className="w-[24px] h-[24px]"
        />
        {name}
      </button>
    </div>
  );
};

export default SocialBtn;
