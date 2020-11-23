import React from "react";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

const override = css`
  // display: block;
  // margin: 0 auto;
  // border-color: red;
`;

const Spinner = () => {
  return (
    <div className="animation">
      <BeatLoader css={override} size={10} color={"#123abc"} loading={true} />
    </div>
  );
};

export default Spinner;
