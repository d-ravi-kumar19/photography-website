'use client'
import Socials from "./Socials"
import { Fade } from "react-awesome-reveal"

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
            <Socials 
              containerStyles="flex gap-x-6 mx-auto xl:mb-0 mb-4"
              iconstyle="text-white text-[20px] transition-all dark:text-white hover:text-white/70 dark:hover:text-white/50"
            />
          </Fade>
          <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
            <div className="text-white">
              Copyrigt &copy; 2024, All Rights Reserved
            </div>
          </Fade>
        </div>
      </div>
    </footer>

  )
}

export default Footer