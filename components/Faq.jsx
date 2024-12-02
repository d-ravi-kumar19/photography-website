'use client'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Fade } from "react-awesome-reveal";

const Faq = () => {
  return (
    <section className="mb-12 xl:mb32 lg:mb-32">
      <div className="container mx-auto">
        <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
          <h2 className="section-title mb-12 text-center mx-auto">Our Studio</h2>
        </Fade>
        {/* Accordion */}
        <div>
          <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>   
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="ms-3">
                    1. What kind of photography equipment do you use?
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  We use high-end professional equipment to capture the best
                  quality images. Our gear includes DSLR and mirrorless cameras,
                  premium lenses, studio lighting, and other accessories from top
                  brands like Canon, Nikon, and Sony.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="ms-3">
                    2. Do I have to come to your studio to view my photos?
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  No, you don't have to come to the studio to view your photos. We
                  offer an online gallery where you can access and view all your
                  images from the comfort of your home. However, if you prefer,
                  you can always schedule a visit to the studio to see your photos
                  in person.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <div className="ms-3">
                    3. How long have you been in business?
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Our studio has been in business for over 10 years, specializing
                  in capturing memories through photography. We’ve had the
                  privilege of working with numerous clients on weddings, family
                  portraits, events, and more.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Faq;
