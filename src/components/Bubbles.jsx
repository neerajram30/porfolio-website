import React from "react";

function Bubbles(props) {
  const { data } = props;
  return (
    <div className="flex flex-wrap">
      {data.map((tech, i) => (
        <div
          key={tech + i}
          className="rounded-2xl bg-primary text-white px-3 py-1 mr-2 text-xs font-semibold mt-3"
        >
          {tech}
        </div>
      ))}
    </div>
  );
}

export default Bubbles;
