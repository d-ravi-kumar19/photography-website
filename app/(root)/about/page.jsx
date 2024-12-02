import { RiRidingFill, RiUserHeartFill, RiSendPlaneFill, RiVidiconFill } from "react-icons/ri"
import HeroImg from "@/components/HeroImg"

const infoData = [
  {
    icon: <RiUserHeartFill size={20} />,
    text: "Mr. Naveen"
  },
  {
    icon: <RiSendPlaneFill size={20} />,
    text: "+91 720 740 060XX"
  },
  {
    icon: <RiVidiconFill size={20} />,
    text: "naveencaptures@gmail.com"
  },
  {
    icon: <RiRidingFill size={20} />,
    text: "Chintal, Kairathabad, Hyderabad"
  },
  // {
  //   icon: <RiUserHeartFill size={20} />,
  //   text: "Passionate Photographer"
  // },
]

const About = () => {
  return (
    <section className="mb-12 mnin-h-screen lg:mb-24 mt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 text-center">About Me</h2>

        {/* Flexbox Layout: Image on the left and info on the right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Hero Image */}
          <div className="relative w-full md:w-1/2">
            <div className="flex justify-center md:justify-end w-full">
              <HeroImg
                imgSrc="/assets/naveen-cr.png"
                containerStyle="w-full h-[450px] sm:h-[200px] md:h-[300px] xl:h-[550px] xl:w-[450px] lg:h-[590px] bg-no-repeat bg-cover object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="text-lg mt-12 xl:mt-3">
              <div className="text-center xl:text-left">
                <h3 className="h3 mb-4">Let's Make Your Perfect Photoshoot</h3>
                <p className="subtitle max-w-xl mx-auto xl:mx-0">
                  Our mission is to further develop the overall excellence of photography and to capture memories that will be cherished for a lifetime, in timeless photographs.
                </p>
                <p className="subtitle max-w-xl mx-auto xl:mx-0">
                  My professional photography services combine classical techniques with a modern approach to ensure your moments are beautifully captured.
                </p>
              </div>
            </div>

            {/* Info Icons */}
            <div className="grid lg:grid-cols-2 gap-x-24 gap-y-6 mb-12">
              {infoData.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-primary">
                    {item.icon}
                  <p className="text-lg text-muted-foreground">{item.text}</p>

                  </div>
                </div>
              ))}
            </div>
            
          </div>
            
        </div>
      </div>
    </section>
  )
}

export default About
