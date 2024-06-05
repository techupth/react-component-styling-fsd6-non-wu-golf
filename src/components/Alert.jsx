/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import frown from "./svg/frown.svg";
import circle from "./svg/alert-circle.svg";
import triangle from "./svg/alert-triangle.svg";
import check from "./svg/check-circle.svg";

function Alert(props) {
  let backgroundColor = "";
  let imageIcon = "";
  if (props.message === "error") {
    backgroundColor = "#f9c8c8";
    imageIcon = frown;
  } else if (props.message === "warning") {
    backgroundColor = "#f9d9c8";
    imageIcon = triangle;
  } else if (props.message === "info") {
    backgroundColor = "#f9ebc8";
    imageIcon = circle;
  } else {
    backgroundColor = "#cef7cd";
    imageIcon = check;
  }

  return (
    <button
      css={css`
        width: 650px;
        height: 76px;
        border-radius: 10px;
        margin-top: 31px;
        color: #444444;
        font-family: Kanit;
        font-size: 20px;
        font-weight: 700;
        text-align: left;
        background-color: ${backgroundColor};
      `}
    >
      <img
        src={imageIcon}
        alt=""
        css={css`
          margin-right: 10px;
        `}
      />
      This is {props.message} alert box
    </button>
  );
}

export default Alert;
