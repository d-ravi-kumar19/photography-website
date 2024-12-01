import Image from "next/image";

const HeroImg = ({ imgSrc, containerStyle }) => {
  return (
    <div className={`${containerStyle} relative`}> {/* Ensure 'relative' for fill */}
      <Image 
        src={imgSrc} 
        alt="Hero image" 
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }} // Ensures the image fits the container
      />
    </div>
  );
};

export default HeroImg;
