"use client";

import { useState, useEffect } from "react";

export function useScreenSize() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    screenWidth,
    isMobile: screenWidth <= 550,
    isTablet: screenWidth > 550 && screenWidth < 1024,
    isDesktop: screenWidth >= 1024,
  };
}
