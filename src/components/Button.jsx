/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  let backgroundColor = "";
  if (props.order === "Primary") {
    backgroundColor = "#074ee8";
  } else {
    backgroundColor = "#07a4e8";
  }

  return (
    <button
      css={css`
        width: 171.19px;
        height: 50px;
        padding: 0px 16px 0px 16px;
        margin-top: 40px;
        gap: 8px;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 400;
        background-color: ${backgroundColor};
      `}
    >
      Large
    </button>
  );
}

export default Button;
