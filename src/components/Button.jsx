/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

function Button(props) {
  if (props.order === "Primary") {
    return (
      <button
        css={css`
          width: 171.19px;
          height: 50px;
          padding: 0px 16px 0px 16px;
          gap: 8px;
          border-radius: 4px;
          background-color: #074ee8;
          font-size: 16px;
          font-weight: 400;
        `}
      >
        Large
      </button>
    );
  } else if (props.order === "Secondary") {
    return (
      <button
        css={css`
          width: 171.19px;
          height: 50px;
          padding: 0px 16px 0px 16px;
          margin-top: 40px;
          gap: 8px;
          border-radius: 4px;
          background-color: #07a4e8;
          font-size: 16px;
          font-weight: 400;
        `}
      >
        Large
      </button>
    );
  }
}

export default Button;
