"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

// swiper components
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const reviewsData = [
  {
    avatar: "/assets/reviews/1.png",
    name: "Abhishek",
    review:
      "Absolutely loved the experience! The team captured every moment beautifully. Highly recommended!",
  },
  {
    avatar: "/assets/reviews/4.png",
    name: "Sneha",
    review:
      "The photography was top-notch, and the attention to detail made our special day unforgettable. Thank you so much!",
  },
  {
    avatar: "/assets/reviews/2.png",
    name: "Amit",
    review:
      "A truly professional team that knows how to make each shot count. The photos turned out amazing!",
  },
  {
    avatar: "/assets/reviews/5.png",
    name: "Priya",
    review:
      "I couldn't have asked for better service. The photographers made us feel comfortable and relaxed throughout the day.",
  },
  {
    avatar: "/assets/reviews/3.png",
    name: "Vikash",
    review:
      "Great work! The final images were stunning, and the editing was flawless. Thanks for capturing such precious memories.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32 lg:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">
          They say about my work
        </h2>
        <div>
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1400: { slidesPerView: 2 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="h-[300px]"
          >
            {reviewsData.map((person, index) => (
              <SwiperSlide key={index}>
                <Card className="p-8 min-h-[250px]  hover:bg-tertiary dark:hover:bg-white/10  transition-all duration-700 cursor-pointer">
                  <CardHeader className="p-0 mb-3">
                    <div className="flex flex-col items-start gapx-4">
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt={person.name}
                        priority
                        className="rounded-full mb-2"
                      />
                    </div>
                    {/* Name */}
                    <div className="flex flex-col">
                      <CardTitle>{person.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-md text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
