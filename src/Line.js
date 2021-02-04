import { useState } from "react";

const Line = ({ symbol, title }) => {
  const [over, setOver] = useState(false);
  // const [isCopy, setIsCopy] = useState(false);
  return (
    <div
      className="line"
      onMouseOver={() => {
        setOver(true);
      }}
      onMouseLeave={() => {
        setOver(false);
      }}
      onClick={(event) => {
        navigator.clipboard.writeText(symbol);
      }}
    >
      <span>
        {symbol} {title}
      </span>
      {over ? <span style={{ fontSize: 20, color: "grey" }}>Click to copy !</span> : ""}
    </div>
  );
};

export default Line;
