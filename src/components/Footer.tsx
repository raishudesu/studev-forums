import { GanttChart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="h-40 bg-[#1c1917] text-[#f2f2f2]">
      <div className="h-full w-full text-sm flex flex-col justify-center items-center gap-3 py-6  ">
        <div className="flex items-center">
          <GanttChart />
          <p
            className={`scroll-m-20 text-xl font-bold tracking-tight transition-colors first:mt-0`}
          >
            stu<span className="text-[#16BC25]">dev</span>
          </p>
        </div>
        <p className="leading-7">@2023 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
