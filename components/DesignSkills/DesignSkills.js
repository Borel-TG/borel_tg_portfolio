import Image from "next/image";

const tools = ["/figma.png", "/photoshop.png", "/illustrator.png"];

function DesignSkills() {
  return (
    <section className="p-5 w-fit shadow-lg backdrop-blur-xl rounded-xl  whitespace-nowrap">
      <div className="absolute -right-[20px] top-9 z-10">
        <Image
          alt="tech-icon"
          className="horizontal-stretch z-10"
          height={40}
          width={40}
          src={"/design.png"}
        />
      </div>
      <h5 className="font-bold text-primary  text-2xl mb-10">
        Design <span className="mx-1">Skills</span>
      </h5>

      <div className={`grid grid-cols-3 gap-4 place-content-center`}>
        {tools.map((item, key) => (
          <div
            key={key}
            className="mx-auto bg-plate-900 shadow-xl border border-[#f3f1f1] p-2 w-fit h-fit rounded-xl"
          >
            <Image alt="tech-icon" height={40} width={40} src={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default DesignSkills;
