import Link from "next/link";
import IconButton from "./iconbutton";

export default function Footer() {
  return (
    <footer className="w-full -z-10 bg-grey fixed bottom-0 h-48">
      <div className="px-10 mx-auto font-light max-w-screen-xl mt-5 items-center flex justify-between">
        <Link
          href={"/contact"}
          className="bg-darkBlue select-none px-3 py-1 rounded-md tracking-wide flex items-center w-fit"
        >
          <div className="rounded-full mr-2 h-4 w-4 bg-gradient-radial from-blue to-darkBlue " />
          available for bookings
        </Link>
        <Link href={"/contact"} aria-label="contact us">
          <IconButton label="Contact us" />
        </Link>
      </div>
      <div className="flex justify-between max-w-screen-xl mx-auto w-full opacity-50 absolute max-sm:-bottom-2 -bottom-3 left-0 right-0 max-sm:text-[40px] max-sm:px-2 text-7xl font-light">
        <h1>ioanna</h1>
        <h1>karanassou</h1>
      </div>
    </footer>
  );
}
