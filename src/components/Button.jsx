/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button() {
  const themes = [
    { text: "Primary", color: "#074ee8" },
    { text: "Secondary", color: "#07A4E8" },
  ];
  return (
    <div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
      >
        {themes.map((theme) => {
          return (
            <div
              css={css`
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 0px 16px;
                gap: 20px;
              `}
            >
              <h1>{theme.text}</h1>
              <button
                css={css`
                  width: 170px;
                  height: 50px;
                  background-color: ${theme.color};
                `}
              >
                {theme.text}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Button;
