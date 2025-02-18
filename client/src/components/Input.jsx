import React from "react";

const Input = ({ type, name, value, placeholder, onChange, src, alt }) => {
  return (
    <div className="input-div">
      <img src={src} alt={alt} />
      <input
        className="input-field"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
