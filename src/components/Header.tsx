import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import NavMenu from "./NavMenu";
import { GanttChart } from "lucide-react";

const Header = () => {
  return (
    <header className="z-50 fixed px-6 backdrop-blur-xl w-full flex justify-center border dark:shadow-slate-900">
      <div className="w-full max-w-screen-xl flex gap-3 md:justify-between  items-center h-14">
        <Link
          href={"/"}
          className="flex items-center scroll-m-20 text-xl font-bold tracking-tight transition-colors first:mt-0"
        >
          <GanttChart />
          stu/<span className="text-[#16BC25]">dev</span>
        </Link>
        <div className="hidden md:block">
          <NavMenu />
        </div>
        <div className="hidden md:block">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;