import React from "react";

const TableIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={props.height}
      width={props.width}
      viewBox="0 0 512 512"
    >
      <path
        fill={props.fill}
        d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM232 432H54a6 6 0 0 1-6-6V296h184v136zm0-184H48V112h184v136zm226 184H280V296h184v130a6 6 0 0 1-6 6zm6-184H280V112h184v136z"
      />
    </svg>
  );
};

export default TableIcon;
