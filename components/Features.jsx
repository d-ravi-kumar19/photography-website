// 'use client'

import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: "PHOTOGRAPHY",
    description: "Capture stunning photos with high-quality resolution. Perfect for photographers and creatives looking for clarity and precision.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "PORTFOLIO LIST",
    description: "Easily manage and display your portfolio. A clean and professional layout that helps showcase your best work.",
    icon: LockClosedIcon,
  },
  {
    name: "FULLY CUSTOMIZABLE",
    description: "Tailor every aspect of your design to match your style and needs. No limitations—create your perfect experience.",
    icon: ArrowPathIcon,
  },
  {
    name: "FREE PLUGINS",
    description: "Access a collection of free plugins that enhance functionality and integrate seamlessly with your design.",
    icon: FingerPrintIcon,
  },
];

const Features = () => {
  return (
    <section className='pb-12 xl:py-24 flex justify-center items-center'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-2 xl:mb-3 text-center mx-auto'>Key Features</h2>

        <div className='flex flex-col'>
            <div className='mx-auto max-w-7xl text-center'>
                <p className='mt-2 text-3xl font-bold tracking-tight sm:text-3xl text-black dark:text-white'>Everything you need to deliver faster and with greater precision.</p>
                <p className='mt-6 text-lg leading-8 text-black dark:text-white'>Our platform is built to help you streamline your workflow and achieve professional results with ease.</p>
            </div>
        
        </div>

        {/* Features List */}
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:m-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-col-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <div key={feature.name} className="relative hover:scale-110 transition-all">
                <dt className='text-base font-semibold leading-7 text-muted-foreground justify-center'>
                  <div className="flex flex-col h-[100px] w-[100px] rounded-full bg-primary items-center justify-center mb-4 ">
                    {/* Render the icon properly */}
                    <feature.icon className="h-[36px] w-[36px] text-white" area-hidden="true"/>
                  </div>
                </dt>
                <dd>
                  <h3 className="text-lg font-semibold text-black dark:text-white">{feature.name}</h3>
                  <p className='mt-2 text-base leading-7 text-gray-600 dark:text-gray-400 '>{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;
