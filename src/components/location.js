import React from "react";

const Location = ({ name, setFilterLocation }) => {
  const handleClick = (event) => {
    setFilterLocation(name);
  };

  return (
    <label className="label cursor-pointer justify-start gap-2 rounded-md mt-0.5">
      <input
        type="checkbox"
        id={name}
        defaultChecked={false}
        className="checkbox checkbox-primary"
        onClick={() => handleClick()}
      />
      <span className="label-text text-base-100" htmlFor={name}>
        {name}
      </span>
    </label>
  );
};

export default Location;
