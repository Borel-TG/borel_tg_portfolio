import React from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ContainedBlock from "@/components/ContainedBlock/ContainedBlock";
import { myProjects } from "@/data";

function page() {
  return (
    <div className="h-100 py-20">
      <ContainedBlock>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 content-center mb-5">
          {myProjects.map((project, key) => (
            <ProjectCard
              key={key}
              name={project.name}
              projectUrl={project.url}
              type={project.type}
              industry={project.industry}
              image={project.image}
              role={project.role}
              summary={project.sumarry}
              reference={project.reference}
              technologies={project.technologies}
            />
          ))}
        </div>
      </ContainedBlock>
    </div>
  );
}

export default page;
