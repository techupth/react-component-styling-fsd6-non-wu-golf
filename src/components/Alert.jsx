/** @jsxImportSource @emotion/react */

// Start coding here
import { css } from "@emotion/react";
import frown from "../assets/frown.svg";
import triangle from "../assets/alert-triangle.svg";
import circle from "../assets/alert-circle.svg";
import check from "../assets/check-circle.svg";

const Alert = (props) => {
  let bgColor = "#CEF7CD";
  let icon = check;
  if (props.status === "error") {
    bgColor = "#f9c8c8";
    icon = frown;
  } else if (props.status === "warning") {
    bgColor = "#F9D9C8";
    icon = triangle;
  } else if (props.status === "info") {
    bgColor = "#F9EBC8";
    icon = circle;
  } else if (props.status === "success") {
    bgColor = "#CEF7CD";
    icon = check;
  }
  return (
    <button
      css={css`
        background-color: ${bgColor};
        padding: 22px 20px;
        border-radius: 10px;
        height: 76px;
        width: 650px;
        color: #444444;
        font-size: 20px;
        font-weight: 700;
        display: flex;
        align-item: center;
        gap: 15px;
        margin: 20px 0;
      `}
    >
      <img src={icon} alt={props.status} />
      {props.text}
    </button>
  );
};

export default Alert;
