"use client";
import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";
import { useSearchParams } from "next/navigation";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  date: string;
  time: string;
  budget: string;
};

const ContactUs = () => {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  // Set the service from URL parameter on component mount
  useEffect(() => {
    if (serviceParam) {
      setValue("service", decodeURIComponent(serviceParam));
    }
  }, [serviceParam, setValue]);

  const services = [
    "Digital Marketing",
    "Web Development",
    "Web Design & UI/UX",
    "Search Engine Optimization",
    "Graphics Design",
    "Branding Services",
    "Social Media Management",
    "Video Editing & Animation",
    "Other",
  ];

  const budgetRanges = [
    "$1,000 - $5,000",
    "$5,000 - $15,000",
    "$15,000 - $30,000",
    "$30,000 - $50,000",
    "$50,000+",
    "Not sure yet",
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          date: selectedDate,
          time: selectedTime,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        reset();
        setSelectedDate("");
        setSelectedTime("");
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative pt-40 pb-26 bg-black overflow-hidden border-t border-neutral-900"
      id="contact"
    >
      {/* Background elements */}
      <motion.div
        animate={{
          opacity: [0.8, 0.9, 0.8],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/3 left-[20%] w-[300px] h-[300px] rounded-full bg-purple-500 blur-[120px] opacity-[0.08]"></div>
        <div className="absolute bottom-1/4 right-[15%] w-[400px] h-[400px] rounded-full bg-blue-500 blur-[150px] opacity-[0.06]"></div>
      </motion.div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-6xl mx-auto pt-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-normal text-neutral-100 mb-6">
            {`  Let's Work Together`}
            </h2>
            <div className="h-[2px] w-24 bg-gradient-to-r from-neutral-600 to-neutral-400 mx-auto mb-8"></div>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
             {` Ready to elevate your digital presence? Share your project details
              and we'll get back to you within 24 hours.`}
            </p>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-900 rounded-xl p-8 md:p-12 border border-neutral-800"
          >
            {submitSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-neutral-100 mb-3">
                  Message Sent Successfully!
                </h3>
                <p className="text-neutral-400 mb-6">
                {`  Thank you for contacting us. We've received your details and
                  will get back to you shortly.`}
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg text-neutral-100 transition-colors duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid md:grid-cols-2 gap-8"
              >
                {/* Left column */}
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-neutral-300 mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-neutral-100 placeholder-neutral-500"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-neutral-300 mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-neutral-100 placeholder-neutral-500"
                      placeholder="john@company.com"
                    />

                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-neutral-300 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-neutral-100 placeholder-neutral-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-neutral-300 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      {...register("company")}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-neutral-100 placeholder-neutral-500"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                {/* Right column */}
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-neutral-300 mb-2"
                    >
                      Service Interested In{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      {...register("service", {
                        required: "Please select a service",
                      })}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-neutral-100 placeholder-neutral-500 appearance-none"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-neutral-300 mb-2"
                    >
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      {...register("budget")}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-neutral-100 placeholder-neutral-500 appearance-none"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date and Time Selection */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="date"
                        className="block text-neutral-300 mb-2"
                      >
                        Preferred Date
                      </label>
                      <div className="relative">
                        <input
                          id="date"
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-neutral-100 placeholder-neutral-500 appearance-none"
                        />
                        <Calendar className="absolute right-3 top-3.5 h-5 w-5 text-neutral-400 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="time"
                        className="block text-neutral-300 mb-2"
                      >
                        Preferred Time
                      </label>
                      <div className="relative">
                        <select
                          id="time"
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          disabled={!selectedDate}
                          className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-neutral-100 placeholder-neutral-500 appearance-none"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                        <Clock className="absolute right-3 top-3.5 h-5 w-5 text-neutral-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-neutral-300 mb-2"
                    >
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register("message", {
                        required:
                          "Please share some details about your project",
                      })}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-neutral-100 placeholder-neutral-500"
                      placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit button */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg text-neutral-100 font-medium transition-all duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-8 w-2 h-2 rounded-full bg-neutral-400 opacity-60"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 2,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-10 w-3 h-3 rounded-full bg-neutral-400 opacity-40"
      />
    </section>
  );
};

export default ContactUs;