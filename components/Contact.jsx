'use client'

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const onSubmit = (data) => {
    setLoading(true);
    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: data.name,
          to_name: "Yadidiah",
          from_email: data.email,
          to_email: "your-email@example.com",
          message: data.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          setStatus('success');
          reset();
          setTimeout(() => setStatus(null), 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setStatus('error');
          setTimeout(() => setStatus(null), 5000);
        }
      );
  };

  return (
    <section id="contact" className="w-full py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex xl:flex-row flex-col-reverse gap-10">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-secondary p-8 rounded-2xl'
        >
          <p className="text-lg font-medium text-text-secondary">Get in touch</p>
          <h3 className="text-4xl md:text-5xl font-bold text-text-primary mt-2">Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className='mt-12 flex flex-col gap-6'
          >
            <label className='flex flex-col'>
              <span className='text-text-primary font-medium mb-4'>Your Name</span>
              <input
                type='text'
                placeholder="What's your name?"
                {...register("name", { required: "Name is required." })}
                className='bg-tertiary py-4 px-6 placeholder:text-text-secondary text-text-primary rounded-lg outline-none border-none font-medium'
              />
              {errors.name && <span className="mt-2 text-red-500">{errors.name.message}</span>}
            </label>
            <label className='flex flex-col'>
              <span className='text-text-primary font-medium mb-4'>Your Email</span>
              <input
                type='email'
                placeholder="What's your email?"
                {...register("email", { required: "Email is required.", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address." } })}
                className='bg-tertiary py-4 px-6 placeholder:text-text-secondary text-text-primary rounded-lg outline-none border-none font-medium'
              />
              {errors.email && <span className="mt-2 text-red-500">{errors.email.message}</span>}
            </label>
            <label className='flex flex-col'>
              <span className='text-text-primary font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                placeholder='What do you want to say?'
                {...register("message", { required: "Message is required." })}
                className='bg-tertiary py-4 px-6 placeholder:text-text-secondary text-text-primary rounded-lg outline-none border-none font-medium resize-none'
              />
              {errors.message && <span className="mt-2 text-red-500">{errors.message.message}</span>}
            </label>

            <button
              type='submit'
              disabled={loading}
              className='bg-accent py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md hover:bg-blue-500 transition-colors duration-300 disabled:bg-gray-500'
            >
              {loading ? "Sending..." : "Send"}
            </button>

            {status === 'success' && <p className="mt-4 text-green-500">Message sent successfully!</p>}
            {status === 'error' && <p className="mt-4 text-red-500">Something went wrong. Please try again.</p>}
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

