import React from "react";
import { Card, CardHeader } from "./ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Group, Link2Icon } from "lucide-react";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* image */}
        <div className="relative flex w-full h-[150px] items-center justify-center dark:bg-secondary/40 xl:bg-[100%] xl:bg-no-repeat overflow-hidden">
          <Image
            src={project.image}
            width={440}
            height={200}
            alt="Project image"
            priority
            className="absolute top-0 left-0 w-full h-full object-cover shadow-2xl hover:scale-110 transition-all"
          />
          {/* Link Button */}
          <div>
            <Link
              href={project.link}
              className="bg-secondary w-[45px] h-[45px] flex justify-center items-center rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50 duration-200 transition-all"
            >
              <Link2Icon />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5 text-white ">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
