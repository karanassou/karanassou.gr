import { cn } from "@/lib/utils";

export default function Button({
  label,
  children,
  className,
}: {
  label?: string;
  children: React.ReactNode | string;
  className?: string;
}) {
  return (
    <button
      aria-label={label ? label : " "}
      className={cn(
        `group bg-blue rounded-full z-10 relative flex items-center md:py-5 py-4 md:pl-10 pl-7 md:pr-7 pr-3 self-baseline duration-300 justify-center gap-4`,
        className
      )}
    >
      {children}
      <div className="w-0 h-0 group-hover:w-6 group-hover:h-6 group-focus:w-6 group-focus:h-6 flex items-center scale-0 -rotate-45 group-hover:rotate-45 group-focus:rotate-45 group-hover:scale-100 group-focus:scale-100 duration-500">
        <div className="bg-[url('/assets/arrow.svg')] md:w-4 md:h-4 w-3 h-3 m-auto"></div>
      </div>
    </button>
  );
}
