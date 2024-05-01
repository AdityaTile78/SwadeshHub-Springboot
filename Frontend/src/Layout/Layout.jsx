import React, { useEffect, useRef } from "react";
import { Toaster } from "react-hot-toast";
import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const mainRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) {
      // Set the height based on the desired value (150vh)
      const height = 150 * window.innerHeight / 100;
      mainRef.current.style.minHeight = `${height}px`;
      mainRef.current.style.maxHeight = `${height}px`;
    }
  }, [children]);

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", scrollBehavior: "smooth" }}>
      <NavbarComponent />
      <main ref={mainRef} style={{ flex: 1, overflowY: "auto" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
