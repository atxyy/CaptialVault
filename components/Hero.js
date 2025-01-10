import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section
      id="hero"
      className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20"
    >
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Our unique Percentage Allocation Money Management (PAMM) Solution
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          At Capital Vault, we combine proven trading strategies with secure,
          expertly managed PAMM accounts to help grow your portfolio. Our
          platform provides seamless, hands-off investing, giving you access to
          professional traders and real-time performance tracking. With a focus
          on transparency and long-term growth, we make your investments work
          for you—effortlessly.
        </p>
        <button className="btn btn-primary btn-wide">
          Start your Investment Journey
        </button>
      </div>
      <div className="lg:w-full">
        <Image
          src="https://i.ibb.co/XZrGmF1/vault.png"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
};

export default Hero;
