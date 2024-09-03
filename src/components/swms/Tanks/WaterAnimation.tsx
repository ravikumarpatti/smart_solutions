import React, { useEffect, CSSProperties } from "react";

interface WaterContainerProps {
  level: number;
}

const WaterContainer: React.FC<WaterContainerProps> = ({ level }) => {
  const waterContainerStyle: CSSProperties = {
    width: "200px",
    height: "200px",
    backgroundColor: "#80c5de",
    borderRadius: "0 0 40px 40px",
    boxShadow: "inset 0 0 50px #1c637c",
    position: "relative",
    overflow: "hidden",
  };

  const beforeAfterCommonStyle: CSSProperties = {
    content: '""',
    position: "absolute",
    width: "200%",
    height: "200%",
    backgroundColor: "#ececec",
    top: "-150%",
    left: "-50%",
    borderRadius: "45%",
    animation: "wave 12s infinite linear",
  };

  const afterStyle: CSSProperties = {
    ...beforeAfterCommonStyle,
    backgroundColor: "#ececec80",
    left: "-52%",
    borderRadius: "40%",
    animationDelay: "1s",
  };

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes wave {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }, []);

  const containerStyle: CSSProperties = {
    width: "fit-content",
  };

  return (
    <section style={containerStyle}>
      <div style={waterContainerStyle}>
        <div style={beforeAfterCommonStyle}></div>
        <div style={afterStyle}></div>
        <div
          style={{
            color: "black",
            position: "absolute",
            top: "20%",
            border: "1px solid black",
            borderRadius: "50%",
            padding: "8px",
            left: "38%",
          }}
        >
          <b>{level}%</b>
        </div>
      </div>
    </section>
  );
};

export default WaterContainer;
