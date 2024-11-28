import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

// react-icons
import { RiMenFill, RiBookmark3Fill, RiBodyScanFill,RiServiceFill } from "react-icons/ri";

// components
import Socials from "./Socials";
import HeroImg from "./HeroImg";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-auto bg-bottom">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Left side content */}
        <div className="flex flex-col justify-between xl:mx-0 text-center xl:text-left lg:text-left w-full md:w-1/2">
          <div className="text-sm uppercase text-primary mb-4 tracking-[4px]">
            PhotoGraphy
          </div>
          <h1 className="h1 uppercase">Let's Make Magic</h1>
          <p className="subtitle max-w-[590px] mt-4 mx-auto xl:mx-0 lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ut turpis nec lorem aliquam tincidunt.
          </p>

          {/* Subscribe Button */}
          <div className="flex flex-col gap-y-3 w-full md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
            <div className="flex w-full gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email Address
              </label>
              <Input type="email" id="email" placeholder="Email" />
              <Link href="/contact">
                <Button>
                  Subscribe
                  <RiMenFill />
                </Button>
              </Link>
            </div>
          </div>

          {/* Socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 lg:mx-0"
            iconstyle="text-foreground text-[22px] hover:text-primary transition-all"
          />
        </div>

        {/* Banner - right side */}
        <div className="hidden xl:flex lg:flex relative w-full md:w-1/2">
          <div className="flex justify-center md:justify-end w-full">
            <HeroImg
              imgSrc="/assets/hero-image.png"
              containerStyle="w-full h-[450px] bg-no-repeat relative bg-bottom object-cover"
            />
          </div>
        </div>
      </div>

      {/* Badge Section */}
      <div className="py-24 sm:py-32"> {/* Background color for separation */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {/* Badge - 1 */}
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-lg font-semibold text-muted-foreground">
                Years of Experience
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-primary">
                <Badge
                  icon={<RiBookmark3Fill />}
                  endCountNum={5}
                  endCountText={"+"}
                  badgeText={""}
                />
              </dd>
            </div>

            {/* Badge - 2 */}
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-lg font-semibold text-muted-foreground">
                Followers
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-primary">
                <Badge
                  icon={<RiBodyScanFill />}
                  endCountNum={96}
                  endCountText={"+"}
                  badgeText={""}
                />
              </dd>
            </div>

            {/* Badge - 3 */}
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-lg font-semibold text-muted-foreground">
                Services
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-primary">
                <Badge
                  icon={<RiServiceFill />}
                  endCountNum={24}
                  endCountText={"+"}
                  // badgeText={""}
                />
              </dd>
            </div>

          </dl>
        </div>
      </div>

    </section>
  );
};

export default Hero;
