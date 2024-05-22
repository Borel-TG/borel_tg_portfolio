import Image from "next/image";

const tools = [
  "/node-js.png",
  "/javascript.png",
  "/typescript.png",
  "/reactjs.png",
  "/nestjs.svg",
  "/java.png",
];

function TechStack() {
  return (
    <section
      className={`p-5 bg-gray-400/10 rounded-xl
    overflow-hidden text-white mb-5 cursor-pointer`}
    >
      <h5 className=" text-black text-2xl mb-3">Technical Skills</h5>
      <div
        className={`w-full inline-flex flex-nowrap gap-10 marque-scroll-left`}
      >
        <div className="flex-none inline-flex gap-5 items-center justify-center md:justify-start">
          {tools.map((item, key) => (
            <CodeBox key={key} imageUrl={item} />
          ))}
        </div>
        <div
          className="flex-none inline-flex gap-5  items-center justify-center md:justify-start"
          aria-hidden="true"
        >
          {tools.map((item, key) => (
            <CodeBox key={key} imageUrl={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;

function CodeBox({ imageUrl = "" }) {
  return (
    <div className="bg-plate-900 shadow-xl p-2 min-w-fit min-h-fit rounded-xl transition-transform hover:scale-110">
      <Image alt="tech-icon" height={40} width={40} src={imageUrl} />
    </div>
  );
}
