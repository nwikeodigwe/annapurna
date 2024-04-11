"use client";
// import QuickLinks from "./quick-links";
import { motion } from "framer-motion";
import { BsSend } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

interface Inputs {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const button = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.3,
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  },
};

export default function ContactContent() {
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    try {
      fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        if (response.ok) {
          console.log(response);
          setSuccess(
            "Your message has been sent successfully. We will get back to you soon."
          );
        } else {
          setError("An error occurred. Please try again later.");
        }
      });
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      setTimeout(() => {
        setSuccess("");
      }, 5000);
      reset();
    }
  }, [formState, isSubmitSuccessful, reset]);
  return (
    <section className="my-20">
      <div className="container md:max-w-screen-lg mx-auto px-10 text-brand-50">
        <div className="">
          <div className="w-3/4 mx-auto flex flex-col gap-4">
            <p>Please Fill the form below to get in touch with us</p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-6"
            >
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Full Name *</label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className="border-[1px] border-gray-300 bg-brand-50  rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition duration-300 ease-in-out"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <span className="text-xs italic text-red-600">
                    Name is required
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Email Address *</label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  className="border-[1px] border-gray-300 bg-brand-50  rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition duration-300 ease-in-out"
                  placeholder="Enter Email Address"
                />
                {errors.email && (
                  <span className="text-xs italic text-red-600">
                    Email address is required
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Phone Number *</label>
                <input
                  {...register("phone", { required: true })}
                  type="text"
                  className="border-[1px] border-gray-300 bg-brand-50  rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition duration-300 ease-in-out"
                  placeholder="Enter Phone Number"
                />
                {errors.phone && (
                  <span className="text-xs italic text-red-600">
                    Phone number is required
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Message *</label>
                <textarea
                  {...register("message", { required: true })}
                  className="resize-none h-32 border-[1px] bg-brand-50 border-gray-300 text-gray-900 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition duration-300 ease-in-out"
                  placeholder="Message here..."
                ></textarea>
                {errors.message && (
                  <span className="text-xs italic text-red-600">
                    Message is required
                  </span>
                )}
              </div>
              {error && (
                <div className="p-3 bg-red-100/85 text-red-600 rounded-sm">
                  {error}
                </div>
              )}
              {success && (
                <div className="p-3 bg-green-100/85 text-green-600 rounded-sm">
                  {success}
                </div>
              )}
              <div>
                <motion.button
                  className={`${
                    isSubmitting ? "disabled" : ""
                  }border-[1px] border-brand-50 font-title text-brand-50 text-sm px-8 py-3 md:px-10 md:py-4 mt-6 rounded-sm flex items-center justify-center`}
                  variants={button}
                  initial="hidden"
                  animate="show"
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  Send message <BsSend className="text-xl ml-2" />
                </motion.button>
              </div>
            </form>
            <div className="flex flex-col gap-4 mt-10">
              <div className="flex gap-4">
                <CiLocationOn className="text-2xl" />{" "}
                <p>#4345A, Calder Ave, Beaumont Texas- 77706</p>
              </div>
              <div className="flex gap-4">
                <MdOutlineAlternateEmail className="text-2xl" />{" "}
                <p>
                  <Link
                    href={"mailto:support@annapurna-tiffins.com"}
                    className="hover:underline transition duration-300"
                  >
                    order@annapurna-tiffins.com
                  </Link>
                </p>
              </div>
              <div className="flex gap-4">
                <IoTimeOutline className="text-2xl" />{" "}
                <p>Monday - Sunday (10:30am - 9:00pm)</p>
              </div>
            </div>
          </div>
          {/* <div className="hidden md:flex col-span-3">
            <QuickLinks />
          </div> */}
        </div>
      </div>
    </section>
  );
}
