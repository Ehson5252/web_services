import React, { useEffect, useState } from "react";
import "./loader.css";

import tea_cup from '../../assets/tea_cup.gif'





const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait until all resources are loaded
    window.addEventListener("load", () => {
      setTimeout(() => setLoading(false), 1500); // 1.5s fade
    });
  }, []);

  return (
    <>
      {loading && (
        <div id="loader">
        <img src={tea_cup} alt="Loading..." />
        </div>
      )}
      <div className={`content ${loading ? "hidden" : "visible"}`}>
        {children}
      </div>
    </>
  );
};

export default Loader;
