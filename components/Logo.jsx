'use client';

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Logo = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false); // Track if the component has mounted

  useEffect(() => {
    setMounted(true); // Set to true when component mounts
  }, []);

  // Don't render the logo until theme is determined
  if (!mounted) {
    return null; // Avoid rendering the logo during the initial load
  }

  // Use light theme logo for "light" and dark theme logo for "dark"
  const logo = theme === "dark" ? "/assets/white_logo.png" : "/assets/black_logo.png";

  return (
    <div className="select-none">
      <Image
        src={logo}
        height={74}   // Adjust the height to a more reasonable value
        width={150}   // Adjust the width to maintain aspect ratio
        priority
        alt="Naveen Captures"
        className="logo-img"
      />
    </div>
  );
};

export default Logo;
