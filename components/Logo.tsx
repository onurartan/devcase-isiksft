"use client"

import React, { FC, useMemo } from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  onlyIcon?: boolean;
  className?: string;
}

const Logo: FC<LogoProps> = ({ width = 100, onlyIcon = false, className }) => {
  const src = useMemo(() => {
    return onlyIcon ? "/logo.png" : "/logo.svg";
  }, [onlyIcon]);

  return (
    <Image
      src={src}
      width={width}
      height={width * 2}
      alt="Master POS Logo"
      className={className}
      priority
    />
  );
};

export default Logo;
