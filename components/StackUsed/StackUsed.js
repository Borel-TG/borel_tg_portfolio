import Image from "next/image";

function StackUsed({ tools = [] }) {
  return (
    <div className="p-1 border border-black/20 bg-black/20 shadow-2xl w-fit rounded-full backdrop-blur-3xl">
      <Image
        alt="tech-icon"
        className="infinite-rotate mb-5 z-10"
        height={25}
        width={25}
        src={"/gear.png"}
      />
      <div className={`flex w-fit flex-col gap-3`}>
        {tools.map((item, key) => (
          <div key={key} className="bg-plate-900 rounded-xl overflow-hidden">
            <Image alt="tech-icon" height={25} width={25} src={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StackUsed;
