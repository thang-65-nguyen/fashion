import React, { useState, useEffect } from "react";
const CustomButton = (props) => {
  const { color, className, ...others } = props;
  const buttonClass = `btn btn-${color} ${className}`;
  return (
    <>
      <button type="button" {...others} className={buttonClass}>
        {props.children}
      </button>
    </>
  );
};

export default CustomButton;
