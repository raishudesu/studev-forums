import Image from "next/image";
import signin from "@/assets/signin.svg";
import { ReactNode } from "react";
import { headingGradient } from "@/components/home/Hero";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 mt-10 lg:mt-20 ">
      <div className="max-w-screen-2xl grid lg:grid-cols-2 justify-items-center items-center">
        <div className="grid justify-items-center gap-12">
          <h1
            className={`pb-1 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${headingGradient}`}
          >
            Start your learning journey.
          </h1>
          <Image
            src={signin}
            alt="learning-sketching"
            className="hidden md:block max-w-sm"
          />
        </div>
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
