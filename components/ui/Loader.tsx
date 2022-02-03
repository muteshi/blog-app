import React from "react";
interface LoaderProps {
  color?: string;
}
const Loader: React.FC<LoaderProps> = ({ color = "#ee3c23" }) => {
  return (
    <div
      className="d-flex justify-content-center center-screen"
      style={{ color: color }}
    >
      <div className="spinner-grow text-info" role="status"></div>
    </div>
  );
};

export default React.memo(Loader);
