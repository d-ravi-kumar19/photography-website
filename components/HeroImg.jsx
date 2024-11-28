import Image from "next/image";

const HeroImg = ({ imgSrc, containerStyle }) => {
  return (
    <div className={`${containerStyle} relative`}> {/* Ensure the parent has 'relative' */}
      <Image 
        src={imgSrc} 
        alt="Hero image" 
        fill
        priority
        style={{ objectFit: "cover" }} // Add objectFit to cover the container properly
      />
    </div>
  );
};

export default HeroImg;
