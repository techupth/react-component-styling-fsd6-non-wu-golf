/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Alert() {
  const themes = [
    { text: "This is error alert box", color: "#F9C8C8", icon: "☹️" },
    { text: "This is warning alert box", color: "#F9D9C8", icon: "⚠️" },
    { text: "This is info alert box", color: "#F9EBC8", icon: "ℹ️" },
    { text: "This is success alert box", color: "#CEF7CD", icon: "✅" },
  ];
  return (
    <div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 50px;
        `}
      >
        {themes.map((theme) => {
          return (
            <div>
              <button
                css={css`
                  width: 500px;
                  height: 50px;
                  color: black;
                  font-weight: 600;
                  background-color: ${theme.color};
                  border-radius: 10px;
                `}
              >
                {theme.icon}
                {theme.text}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Alert;
