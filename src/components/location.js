import React from "react";

const Location = ({ name }) => {
  return (
    <label className="label cursor-pointer justify-start gap-2">
      <input
        type="checkbox"
        id={name}
        defaultChecked={false}
        className="checkbox checkbox-primary checkbox"
      />
      <span className="label-text text-base-100" htmlFor={name}>
        {name}
      </span>
    </label>
  );
};

export default Location;
