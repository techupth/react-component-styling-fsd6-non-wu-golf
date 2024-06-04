/** @jsxImportSource @emotion/react */

// Start coding here
import { css } from "@emotion/react";
import frown from "../assets/frown.svg";

const Alert = (props) => {
  if (props.status === "error") {
    return (
      <button
        css={css`
          background-color: #f9c8c8;
          padding: 22px 20px;
          border-radius: 10px;
          height: 76px;
          width: 650px;
          color: #444444;
          font-size: 20px;
          font-weight: 700;
          display: flex;
          align-item: center;
          gap: 15px
        `}
      >
          <img src={frown} alt=""/>
        This is error alert box
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

export default Alert;
