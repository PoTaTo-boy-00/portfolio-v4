"use client";

// import emailjs from "@emailjs/browser";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import React, { useRef } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 8597323552",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ayanangshudutta1@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "xyz",
  },
];

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

const page = () => {
  const form = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.5, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center xl:flex-row gap-[30px]">
          {/* form */}
          <div className=" xl:h-[54%]  xl:order-none">
            <form
              className="flex flex-col gap-6 p-3 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
              ref={form}
            >
              <h3 className=" text-4xl text-accent">Contact Me</h3>
              {/* <p className="text-white/60 ">
                If you have any questions or just want to say hi, I'd love to
                hear from you
              </p> */}
              {/* input */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  ref={firstNameRef}
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  ref={lastNameRef}
                />
                <Input
                  type="number"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  ref={phoneNumberRef}
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  ref={emailRef}
                />
              </div>
              {/* textarea */}
              <Textarea
                className="w-full min-h-[180px] rounded-[10px] bg-[#18181b] border-2 
    border-white/20 px-6 py-4 outline-none text-white 
    placeholder:text-white/30 hover:border-white/40 
    focus:border-accent focus:ring-0 focus:bg-transparent 
    transition-all duration-300 resize-none
    text-base font-light"
                ref={messageRef}
                name="message"
                placeholder="Type your message here"
              />
              <Button size="md" className="max-w-40 ml-auto">
                Send{" "}
              </Button>
            </form>
            {/* button */}
          </div>
          {/* info */}
          {/* info */}
          {/* <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex gap-6 items-center ">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className=" flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </motion.section>
  );
};

export default page;
