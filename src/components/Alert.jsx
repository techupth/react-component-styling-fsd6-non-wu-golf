/** @jsxImportSource @emotion/react */

// Start coding here
import { css } from "@emotion/react";
import frown from "../assets/frown.svg";
import triangle from "../assets/alert-triangle.svg";
import circle from "../assets/alert-circle.svg";
import check from "../assets/check-circle.svg"

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
          gap: 15px;
          margin: 20px 0
        `}
      >
        <img src={frown} alt="" />
        This is error alert box
      </button>
    );
  } else if (props.status === "warning") {
    return (
      <button
        css={css`
          background-color: #F9D9C8;
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
          margin: 20px 0
        `}
      >
        <img src={triangle} alt="" />
        This is warning alert box
      </button>
    );
  } else if (props.status === "info") {
    return (
      <button
        css={css`
          background-color: #F9EBC8;
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
          margin: 20px 0
        `}
      >
        <img src={circle} alt="" />
        This is info alert box
      </button>
    );
  } else if (props.status === "success") {
    return (
      <button
        css={css`
          background-color: #CEF7CD;
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
          margin: 20px 0
        `}
      >
        <img src={check} alt="" />
        This is success alert box
      </button>
    );
  }
};

export default Alert;
