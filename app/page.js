import Profile from "@/components/Profile/Profile";
import Experience from "@/components/Experience/Experience";
import Education from "@/components/Education/Education";
import TechStack from "@/components/TechStack/TechStack";
import Link from "next/link";
import ContainedBlock from "@/components/ContainedBlock/ContainedBlock";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import ReferenceCard from "@/components/ReferenceCard/ReferenceCard";
import { myProjects } from "@/data";
import ContactFrom from "@/components/ContactForm/ContactFrom";
import Point from "@/components/Point/Point";
import ScrollToTop from "@/components/scrollTop";

export default function Home() {
  return (
    <main className="relative z-0 scroll-smooth">
      {/* Header */}
      <header className="bg-header">
        <ContainedBlock className="flex flex-col md:flex-row gap-5 py-16 md:py-20">
          <div className="flex-1 flex md:justify-center p-5">
            <Profile />
          </div>
          <div className="flex-1 p-5">
            <h5 className="text-xl underline md:text-1xl">About Me</h5>
            <h1 className="mt-5 text-2xl md:text-3xl text-capitalize  font-merienda">
              Call me
              <span className="text-primary font-bold mx-2">Borel</span>
              <span className="font-bold mr-2">Tchassem</span>
            </h1>
            <h2 className="mt-5 text-2xl md:text-3xl text-capitalize font-bold font-merienda">
              I Develop Web Applications
            </h2>
            {/* <p className="mt-5 text-lg">
              I am a Full-stack JavaScript and React developer, passionate about
              developing robust web applications and developing user interfaces
              that can ensure a seamless user’s experience.
            </p> */}
            <p className="mt-5 text-lg">
              <p className="mt-5 text-lg">
                I’m a Product-Oriented Full-stack JavaScript Developer with a
                passion for turning ideas into scalable web platforms. Whether
                I’m writing clean, maintainable code or shaping product
                strategy, I thrive at the intersection of user needs, technical
                architecture, and business goals. I lead teams, gather
                requirements, plan features, and build fast, reliable web apps
                that people actually love to use.
              </p>
            </p>

            <div className="flex gap-5 items-end mt-10">
              <TechStack />
              {/* <SocialLinks /> */}
              {/* <Button label="Hire Me" />
              <Button label="My resume" /> */}
            </div>
          </div>
        </ContainedBlock>
      </header>

      {/* Experiences */}
      <div id="experience" className="bg-header py-16 md:py-20">
        <ContainedBlock>
          <h5 className="title mb-16">
            Professional <span className="text-primary">Background</span>
          </h5>
          <div className="flex flex-col md:flex-row gap-5 ">
            <div className="flex-1 flex items-start gap-10">
              <h5 className="font-bold  text-3xl flex flex-col bg-gradient-to-b from-black to-primary bg-clip-text text-transparent">
                <span>E</span>
                <span>x</span>
                <span>p</span>
                <span>e</span>
                <span>r</span>
                <span>i</span>
                <span>e</span>
                <span>n</span>
                <span>c</span>
                <span>e</span>
                <span>s</span>
              </h5>
              <Experience />
            </div>
            <div className="flex-1 flex items-start gap-10">
              <h5 className="font-bold  text-3xl flex flex-col bg-gradient-to-b from-primary to-black  bg-clip-text text-transparent">
                <span>E</span>
                <span>d</span>
                <span>u</span>
                <span>c</span>
                <span>a</span>
                <span>t</span>
                <span>i</span>
                <span>o</span>
                <span>n</span>
              </h5>
              <Education />
            </div>
          </div>
        </ContainedBlock>
      </div>

      {/* Projects */}
      <section id="projects" className="bg-flowedr">
        <div className="py-20">
          <ContainedBlock>
            <h5 className="title text-center">
              Popular <span className="text-primary">Works</span>
            </h5>
            <div className="relative mt-20 rounded-xl pb-16">
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
              <Link
                href={"/projects"}
                className={
                  "p-3 mt-10 block text-center text-xl text-primary underline underline-offset-8 transition-colors ease-linear hover:text-green-800"
                }
              >
                View all projects
              </Link>
            </div>
          </ContainedBlock>
        </div>
      </section>

      {/* References */}
      <section className="bg-opacity-5 py-16 md:py-20 bg-flower">
        <ContainedBlock>
          <h5 className="title mb-10">
            <span className="text-white">My </span>References
          </h5>
          <div className="flex flex-col md:flex-row gap-5 ">
            <ReferenceCard
              image={"/bg-flower.jpg"}
              name={"Jean Dok"}
              role={"C.E.O at Loosto"}
              testimony={
                "Borel was the lead frontend architect for 2 years on our project and improved the overall productivity of the dev team."
              }
            />
            <ReferenceCard
              image={"/bg-flower.jpg"}
              name={"Joel Kemmogne"}
              role={"C.E.O at Vita"}
              testimony={
                "From Idea to Reality, Borel has been an important key player in the development of our application."
              }
            />
            <ReferenceCard
              image={"/bg-flower.jpg"}
              name={"Cedrick Fonguh"}
              role={"C.T.O at Afiwa-Exchange"}
              testimony={
                "Our web application was completely rebuilt from scratch and is s.e.o optimised. I recommend him for any web project."
              }
            />
          </div>
        </ContainedBlock>
      </section>

      {/* contact */}
      <section id="contact" className="py-20">
        <ContainedBlock className="py-10">
          <div className="bg-primary rounded-3xl p-5 md:p-10">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <h5 className="title">
                  <span className="text-white me-2">Why</span>
                  me ?
                </h5>
                <div className="mt-10">
                  <Point
                    number={1}
                    label={"I'm exited about innovative projects"}
                    emojiCode="128512"
                  />
                  <Point
                    number={2}
                    label={"I love being part of a team, diverse or not"}
                    emojiCode="128521"
                  />
                  <Point
                    number={3}
                    label={"I hard-coded this site for practice !"}
                    emojiCode="128526"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h5 className="title mb-10 anime-bounce">
                  <span className="text-white">{"Let's "}</span>
                  {" Connect !"}
                </h5>
                <ContactFrom />
              </div>
            </div>
          </div>
        </ContainedBlock>
      </section>
      {/* sroll-to-top */}
      <ScrollToTop />
    </main>
  );
}
