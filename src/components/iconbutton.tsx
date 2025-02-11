export default function IconButton({ label }: { label?: string }) {
  return (
    <button
      aria-label={label ? label : " "}
      className="
        bg-blue
        w-10 h-10 cursor-circle rounded-2xl flex items-center -rotate-90 hover:rotate-0 focus:rotate-0 duration-500"
    >
      <div className="bg-[url('/assets/arrow.svg')] md:w-4 md:h-4 w-3 h-3 m-auto"></div>
    </button>
  );
}
