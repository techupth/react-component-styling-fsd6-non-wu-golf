/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import frown from "./svg/frown.svg";
import circle from "./svg/alert-circle.svg";
import triangle from "./svg/alert-triangle.svg";
import check from "./svg/check-circle.svg";

function Alert(props) {
  if (props.message === "error") {
    return (
      <button
        css={css`
          width: 650px;
          height: 76px;
          color: #444444;
          border-radius: 10px;
          margin-top: 31px;
          background-color: #f9c8c8;
          font-family: Kanit;
          font-size: 20px;
          font-weight: 700;
          text-align: left;
        `}
      >
        <img src={frown} alt="" /> This is error alert box
      </button>
    );
  } else if (props.message === "warning") {
    return (
      <button
        css={css`
          width: 650px;
          height: 76px;
          color: #444444;
          border-radius: 10px;
          margin-top: 31px;
          background-color: #f9d9c8;
          font-family: Kanit;
          font-size: 20px;
          font-weight: 700;
          line-height: 29.9px;
          text-align: left;
        `}
      >
        <img src={triangle} alt="" /> This is warning alert box
      </button>
    );
  } else if (props.message === "info") {
    return (
      <button
        css={css`
          width: 650px;
          height: 76px;
          color: #444444;
          border-radius: 10px;
          margin-top: 31px;
          background-color: #f9ebc8;
          font-family: Kanit;
          font-size: 20px;
          font-weight: 700;
          text-align: left;
        `}
      >
        <img src={circle} alt="" /> This is info alert box
      </button>
    );
  } else if (props.message === "success") {
    return (
      <button
        css={css`
          width: 650px;
          height: 76px;
          color: #444444;
          border-radius: 10px;
          margin-top: 31px;
          background-color: #cef7cd;
          font-family: Kanit;
          font-size: 20px;
          font-weight: 700;
          text-align: left;
        `}
      >
        <img src={check} alt="" /> This is info alert box
      </button>
    );
  }
}

export default Alert;
