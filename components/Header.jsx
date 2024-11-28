'use client'
import ThemeToggler from "./ThemeToggler";
import Link from "next/link";

import Logo from "./Logo";


import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState();
  const pathname = usePathname();
  // console.log(pathname)

  useEffect( ()=>{
    const scrollYPos = window.addEventListener('scroll', () =>{
      window.scrollY > 50 ? setHeader(true) : setHeader(false);

      // remove events
      return () => window.removeEventListener('scroll', scrollYPos)
    })
  })

  return (
    <header
      className={`${ 
        header 
        ? 'py-2 bg-white shadow-lg dark:bg-accent'
        : 'py-4 dark: bg-transparent'
      } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-transparent'}`}
    >
      <div className="container mx-auto ">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Logo />
          </Link>

          <div className="flex items-center gap-x-6">
            {/* Navigation Section */}
            <Nav 
              containerStyles="hidden lg:flex gap-x-8 items-center "
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />

            {/* theme toggle */}
            <ThemeToggler />

            {/* Mobile Navigation */}
            <div className="xl:hidden lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
