"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Form() {
  const [error, setError] = useState("");
  const [success, setSucess] = useState("");
  const { register, handleSubmit } = useForm();
  return (
    <form className="mt-4">
      <div>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-sm border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-3  sm:text-sm sm:leading-6"
            placeholder="Your email"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 p-3"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
