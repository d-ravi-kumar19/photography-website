import { Smile, Scan, Bird } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Services data
const serviceData = [
  {
    icon: <Smile size={40} strokeWidth={1} />,
    title: "Portraiture",
    description: "Capture timeless portraits with a personal touch.",
  },
  {
    icon: <Scan size={40} strokeWidth={1} />,
    title: "Landscape",
    description: "Showcasing breathtaking views and scenic beauty.",
  },
  {
    icon: <Bird size={40} strokeWidth={1} />,
    title: "Lifestyle",
    description: "Telling stories through candid, authentic moments.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36 lg:mb-36">
      <div className="container mx-auto px-6">
        <h2 className="section-title mb-12 text-3xl font-extrabold">
          Our Services
        </h2>

      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-y-12 lg:gap-y-24 lg:gap-x-6 justify-items-center">
        {serviceData.map((item, index) => (
          <Card
            key={index}
            className="relative w-full max-w-[425px] flex flex-col items-center justify-center pb-10  hover:bg-tertiary dark:hover:bg-white/10  transition-all duration-700 cursor-pointer"
          >
            <CardHeader className="mb-6">
              <div className="w-[80px] h-[80px] bg-primary text-white rounded-full flex items-center justify-center absolute -bottom-6 right-6 mx-auto">
                {item.icon}
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </CardTitle>
              <CardDescription className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                {item.description || "No description available."}
              </CardDescription>
            </CardContent>
          </Card>

        ))}
      </div>

      </div>
    </section>
  );
};

export default Services;
