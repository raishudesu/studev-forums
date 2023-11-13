import { Button } from "../ui/button";

export const headingGradient =
  "text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-600 to-gray-500 dark:from-gray-100 dark:to-gray-400";

const Hero = () => {
  return (
    <div className="pt-10 md:pt-20 w-full max-w-screen-xl grid justify-items-center gap-6">
      <div className="grid gap-6 text-center">
        <h1
          className={`scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl ${headingGradient}`}
        >
          Ask. Collaborate. Learn.
        </h1>
        <p className="leading-7">
          Enhance your learning development by collaborating with other aspiring
          students and professionals.
        </p>
        <div className="place-self-center flex gap-3">
          <Button>Get started</Button>
          <Button variant={"secondary"}>Forums</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
