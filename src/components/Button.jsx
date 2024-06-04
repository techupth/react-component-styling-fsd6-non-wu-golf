/** @jsxImportSource @emotion/react */

// Start coding here
import { css } from "@emotion/react";

const Button = (props) => {
  if (props.style === "primary") {
    return (
      <button
        css={css`
          padding: 0 16px;
          background-color: #074ee8;
          border-radius: 4px;
          height: 50px;
          width: 170px;
          color: white;
          font-size: 16px;
          font-weight: 400;
        `}
      >
        Button
      </button>
    );
  } else {
    return (
      <button
        css={css`
          padding: 0 16px;
          background-color: #07a4e8;
          border-radius: 4px;
          height: 50px;
          width: 170px;
          color: white;
          font-size: 16px;
          font-weight: 400;
        `}
      >
        Button
      </button>
    );
  }
};

export default Button