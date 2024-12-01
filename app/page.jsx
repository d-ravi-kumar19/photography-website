import Image from "next/image";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Features/>
      <Services/>
      <Gallery/>
      <Reviews/>
      <Faq/>
      <Newsletter/>
    </main>

)
}
