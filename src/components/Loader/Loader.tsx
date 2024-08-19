import React from "react";
import "./Loader.css"; // Import the CSS for the loader

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="box box-1">
        <div className="side-left"></div>
        <div className="side-right"></div>
        <div className="side-top"></div>
      </div>
      <div className="box box-2">
        <div className="side-left"></div>
        <div className="side-right"></div>
        <div className="side-top"></div>
      </div>
      <div className="box box-3">
        <div className="side-left"></div>
        <div className="side-right"></div>
        <div className="side-top"></div>
      </div>
      <div className="box box-4">
        <div className="side-left"></div>
        <div className="side-right"></div>
        <div className="side-top"></div>
      </div>
    </div>
  );
};

export default Loader;

// src/components/Loader/Loader.tsx

// import React from "react";
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";

// const Loader: React.FC = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         width: "100%",
//         position: "fixed",
//         top: 0,
//         left: 0,
//         backgroundColor: "rgba(255, 255, 255, 0.8)",
//         zIndex: 9999,
//       }}
//     >
//       <CircularProgress />
//     </Box>
//   );
// };

// export default Loader;
