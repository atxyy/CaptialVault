"use client";
import { useState } from "react";
import Link from "next/link";
import ButtonSignin from "@/components/ButtonSignin";
import NavBar from "@/components/NavBar";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import TypingText from "@/components/TypingText";
import Hero from "@/components/Hero";
import FadeUpOnScroll from "@/components/FadeUpOnScroll"; // Import the scroll animation component
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <section>
        <div>
          <NavBar />
          <div className="flex flex-col items-center justify-center min-h-screen pl-8 text-6xl">
            <TypingText
              text="Welcome to Capital Vault"
              speed={100}
              className=""
            />
            <div className="pt-8">
              <a href="#hero" className="btn btn-primary">
                Learn more
              </a>
            </div>
          </div>
          <div>
            <FadeUpOnScroll>
              <div
                id="hero"
                className="min-h-screen text-white flex items-center justify-center"
              >
                <Hero />
              </div>
            </FadeUpOnScroll>
          </div>
          <FadeUpOnScroll>
            <div id="features">
              <FeaturesAccordion />
            </div>
          </FadeUpOnScroll>
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <Footer />
      </section>
    </main>
  );
}
