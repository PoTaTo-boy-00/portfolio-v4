"use client";
import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
// import { FaDownload } from "../node_modules/react-icons/fa";
import { FiDownload } from "../node_modules/react-icons/fi";

const Header = () => {
  const handleDownload = () => {
    const url =
      "https://asset.cloudinary.com/dd3wlco6o/8f0288ac75e503d83ebb37acae25f56d?fl_attachment";
    window.open(url, "_blank");
  };
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold ">
            {/* <span>\</span> */}
            <Link
              href="https://github.com/PoTaTo-boy-00"
              className="hover:text-accent cursor-pointer"
            >
              Potatooo
            </Link>
            {/* <span>/</span> <span className="text-accent">.</span> */}
          </h1>
        </Link>
        {/* nav */}
        <div className="hidden md:flex items-center gap-8">
          <Nav />
          <Link href="/">
            <Button onClick={handleDownload}>
              Resume <FiDownload className="m-1" />
            </Button>
          </Link>
        </div>

        {/* mobile navbar */}

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
