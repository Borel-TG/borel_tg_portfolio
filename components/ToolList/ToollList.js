function ToolList({ title, list = [] }) {
  if (!list.length) {
    return null;
  }
  return (
    <section className="py-10 min-w-[300] w-100bg-[#141316] border border-[#555555] rounded-xl overflow-hidden whitespace-nowrap text-white hover:shadow-inner-xl hover:shadow-red-700">
      <h5 className="px-5 font-bold text-2xl mb-5">
        {title} <span className="text-indigo-500">Skills</span>
      </h5>
      <div className={`marque-scroll-left flex w-100 gap-3 mb-5`}>
        {list.map((item, key) => (
          <ScrollItem title={item} key={key} />
        ))}
      </div>
      <div className={`marque-scroll-right flex  gap-3`}>
        {list.reverse().map((item, key) => (
          <ScrollItem title={item} key={key} />
        ))}
      </div>
    </section>
  );
}

export default ToolList;

function ScrollItem({ title }) {
  return (
    <span className="p-2 border border-[#555555] text-[#555555] rounded-xl cursor-pointer text-nowrap">
      {title}
    </span>
  );
}
