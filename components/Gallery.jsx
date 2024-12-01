import ProjectCard from "./ProjectCard";

const projectData = [
  {
      image: "/assets/work/1.jpg",
      name: 'April 13, 2024',
      category: "Children",
      description: "A joyful first birthday celebration with colorful decor and fun moments.",
      link: "/projects/children-1",
      codepen: "/codepen/children-1",
  },
  {
      image: "/assets/work/holy2.jpg",
      name: 'December 4, 2024',
      category: "Holy",
      description: "A sacred and elegant celebration with a serene atmosphere and spiritual rituals.",
      link: "/projects/holy-1",
      codepen: "/codepen/holy-1",
  },
  {
      image: "/assets/work/m2.jpg",
      name: 'December 12, 2024',
      category: "Wedding",
      description: "A beautiful wedding with stunning florals and timeless elegance.",
      link: "/projects/wedding-1",
      codepen: "/codepen/wedding-1",
  },
  {
      image: "/assets/work/haldi1.jpg",
      name: 'December 15, 2024',
      category: "Haldi",
      description: "A lively and traditional Haldi ceremony filled with joy and bright colors.",
      link: "/projects/haldi-1",
      codepen: "/codepen/haldi-1",
  },
  {
      image: "/assets/work/krish1.jpg",
      name: 'December 20, 2024',
      category: "Birthday",
      description: "A fun-filled birthday bash with playful themes, cakes, and lots of laughter.",
      link: "/projects/birthday-1",
      codepen: "/codepen/birthday-1",
  },
];


const Gallery = () => {
  return (
    <section className="relative mb-12 xl:mb-48 lg:mb-48">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
