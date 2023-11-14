import ParticlesBackground from "@/components/ParticlesBackground";
import Community from "@/components/home/Community";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 mt-6">
      <Hero />
      <Features />
      <Community />
      <ParticlesBackground />
    </section>
  );
}
