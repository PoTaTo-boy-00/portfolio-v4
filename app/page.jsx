"use client";
import { Button } from "@/components/ui/button12";
import React from "react";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";

const Home = () => {
  const handleDirectDownload = () => {
    const url =
      "https://asset.cloudinary.com/dd3wlco6o/8f0288ac75e503d83ebb37acae25f56d?fl_attachment";
    console.log(url);
    window.open(url, "_blank");
  };

  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-18">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-4">
              Hi I'm <br />{" "}
              <span className="text-accent">Ayanangshu Dutta</span>
            </h1>
            <p className="max-w-[500px] mb-5 text-white/80">
              Full Stack Web Developer based in{" "}
              <b className="text-accent">India</b> with a knack for creating
              dynamic and responsive web applications. <br />
              Experienced in JavaScript, React, Node.js, and modern web
              technologies.
            </p>
            {/* <span className="text-xl">West Bengal, India</span> */}
            {/* social btn */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* <a href="/photo.png" download={true} className="inline-flex"> */}
              <Button
                onClick={handleDirectDownload}
                className="h-[56px] px-8 text-sm uppercase tracking-[2px]
                md:hidden
          inline-flex items-center justify-center gap-2
          rounded-full border border-accent 
          bg-transparent text-accent
          hover:bg-accent hover:text-primary
          transition-all duration-300"
              >
                <span>Resume</span>
                <FiDownload />
              </Button>
              {/* </a> */}
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            {/* <Photo /> */}
          </div>
        </div>
      </div>
      {/* <Stats /> */}
    </section>
  );
};

export default Home;
