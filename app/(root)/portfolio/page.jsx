'use client';

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Fade } from "react-awesome-reveal";

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

const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];

const Portfolio = () => {
  const [categories] = useState(uniqueCategories);
  const [selectedCategory, setSelectedCategory] = useState('all projects');

  // Filter projects based on the selected category
  const filteredProjects = selectedCategory === 'all projects'
    ? projectData
    : projectData.filter((project) => project.category === selectedCategory);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <div>
          <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Portfolio</h2>
          </Fade>

          {/* Tabs */}
          <Tabs defaultValue={selectedCategory} className="mb-24 xl:mb-36">
            <Fade direction="up" delay={600} cascade damping={1e-1} triggerOnce={true}>
              <TabsList className="w-full grid h-full md:grid-cols-6 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none">
                {categories.map((category, index) => (
                  <TabsTrigger
                    value={category}
                    key={index}
                    onClick={() => setSelectedCategory(category)}
                    className="capitalize w-[162px] md:w-auto"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Fade>

            {/* Tabs Content */}
            {/* <Fade direction="up" delay={800} cascade damping={1e-1} triggerOnce={true}> */}
              <TabsContent value={selectedCategory}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
                    {filteredProjects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        project={project} // Pass the entire project object
                      />
                    ))}
                  </Fade>
                </div>
              </TabsContent>
            {/* </Fade> */}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
