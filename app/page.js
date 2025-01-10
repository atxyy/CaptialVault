"use client";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import TypingText from "@/components/TypingText";
import Hero from "@/components/Hero";
import FadeUpOnScroll from "@/components/FadeUpOnScroll";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className=" min-h-screen flex flex-col">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <TypingText
          text="Welcome to Capital Vault"
          speed={100}
          className="text-4xl sm:text-5xl font-bold leading-tight"
        />
        <div className="pt-8">
          <a href="#hero" className="btn btn-primary text-lg px-8 py-3">
            Learn More
          </a>
        </div>
      </section>

      {/* Hero Content Section */}
      <section className=" text-white">
        <FadeUpOnScroll>
          <div
            id="hero"
            className="min-h-screen flex items-center justify-center px-4"
          >
            <Hero />
          </div>
        </FadeUpOnScroll>
      </section>

      {/* Features Section */}
      <section className="px-4 py-12">
        <FadeUpOnScroll>
          <div id="features" className="max-w-4xl mx-auto">
            <FeaturesAccordion />
          </div>
        </FadeUpOnScroll>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-12 ">
        <div id="pricing" className="max-w-4xl mx-auto">
          <Pricing />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
