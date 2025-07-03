"use client";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheckCircle,
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiGlobe,
  FiLayers,
  FiTrendingUp,
  FiFilm,
  FiImage,
  FiLink,
  FiCode,
  FiBox,
  FiAlertTriangle,
  FiX,
} from "react-icons/fi";

export default function ContactUs() {
  const [activeTab, setActiveTab] = useState<"client" | "agency">("client");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<{ show: boolean; message: string }>({
    show: false,
    message: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "web-dev",
    budget: "1k-5k",
    message: "",
    company: "",
    website: "",
  });

  // Scroll to top on submission
  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isSubmitted]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWebsiteChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim().replace(/^https?:\/\//, "");
    setFormData((prev) => ({
      ...prev,
      website: value ? `https://${value}` : "",
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setError({ show: false, message: "" });

    // Validate required fields
    const requiredFields = ["name", "email", "message"];
    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        setError({
          show: true,
          message: `Please fill in the ${field} field.`,
        });
        setIsSubmitted(false);
        return;
      }
    }

    try {
      const serviceMap: Record<string, string> = {
        "web-dev": "Web Development",
        "ui-ux": "UI/UX Design",
        "digital-marketing": "Digital Marketing",
        "seo": "SEO Optimization",
        "link-building": "Link Building",
        "graphics": "Graphics Design",
        "video-editing": "Video Editing",
        "3d-modeling": "3D Modeling",
        "development": "Development Partnership",
        "design": "Design Collaboration",
        "marketing": "Marketing Alliance",
        "content": "Content Partnership",
      };

      const budgetMap: Record<string, string> = {
        "1k-5k": "$1,000 - $5,000",
        "5k-10k": "$5,000 - $10,000",
        "10k-20k": "$10,000 - $20,000",
        "20k+": "$20,000+",
        "custom": "Custom Budget",
      };

      const payload = {
        ...formData,
        service: serviceMap[formData.service] || formData.service,
        budget: formData.budget ? budgetMap[formData.budget] || formData.budget : undefined,
        subject: activeTab === "client" ? "Project Inquiry" : "Partnership Request",
      };

      const response = await fetch("/api/contact/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Form submission failed");
      }

      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "web-dev",
          budget: "1k-5k",
          message: "",
          company: "",
          website: "",
        });
      }, 5000);
    } catch (err) {
      console.error(err);
      setError({
        show: true,
        message: err instanceof Error ? err.message : "Unexpected error occurred",
      });
      setIsSubmitted(false);
    }
  };

  const projectTypes = [
    {
      value: "web-dev",
      label: "Web Development",
      icon: <FiGlobe className="mr-2" />,
    },
    {
      value: "ui-ux",
      label: "UI/UX Design",
      icon: <FiLayers className="mr-2" />,
    },
    {
      value: "digital-marketing",
      label: "Digital Marketing",
      icon: <FiTrendingUp className="mr-2" />,
    },
    {
      value: "seo",
      label: "SEO Optimization",
      icon: <FiTrendingUp className="mr-2" />,
    },
    {
      value: "link-building",
      label: "Link Building",
      icon: <FiLink className="mr-2" />,
    },
    {
      value: "graphics",
      label: "Graphics Design",
      icon: <FiImage className="mr-2" />,
    },
    {
      value: "video-editing",
      label: "Video Editing",
      icon: <FiFilm className="mr-2" />,
    },
    {
      value: "3d-modeling",
      label: "3D Modeling",
      icon: <FiBox className="mr-2" />,
    },
  ];

  const partnershipTypes = [
    {
      value: "development",
      label: "Development Partnership",
      icon: <FiCode className="mr-2" />,
    },
    {
      value: "design",
      label: "Design Collaboration",
      icon: <FiLayers className="mr-2" />,
    },
    {
      value: "marketing",
      label: "Marketing Alliance",
      icon: <FiTrendingUp className="mr-2" />,
    },
    {
      value: "content",
      label: "Content Partnership",
      icon: <FiFilm className="mr-2" />,
    },
  ];

  const budgetOptions = [
    { value: "1k-5k", label: "$1,000 - $5,000" },
    { value: "5k-10k", label: "$5,000 - $10,000" },
    { value: "10k-20k", label: "$10,000 - $20,000" },
    { value: "20k+", label: "$20,000+" },
    { value: "custom", label: "Custom Budget" },
  ];

  return (
    <div className="min-h-screen pt-40 bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <AnimatePresence>
        {error.show && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div className="bg-red-900/80 backdrop-blur-md border border-red-700 rounded-xl shadow-2xl overflow-hidden w-full max-w-md">
              <div className="p-4 flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <FiAlertTriangle className="h-6 w-6 text-red-300" />
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium text-red-100">
                      Submission Error
                    </h3>
                    <button
                      onClick={() => setError({ show: false, message: "" })}
                      className="text-red-300 hover:text-white focus:outline-none"
                    >
                      <FiX className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="mt-1 text-sm text-red-200">
                    {error.message}
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: 0 }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-1 bg-red-700"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="block">
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-300/90">
                Professional
              </span>{" "}
              Digital Solutions
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-200 to-neutral-300/90">
              Fast & Reliable Delivery
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto"
          >
            From web development to video editing, we deliver exceptional
            results in days, not months. Get started with our premium services
            today.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-neutral-900 rounded-full p-1 border border-neutral-800">
            {["client", "agency"].map((type) => (
              <button
                key={type}
                onClick={() => setActiveTab(type as "client" | "agency")}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${activeTab === type
                  ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg"
                  : "text-neutral-300 hover:text-white"
                  }`}
              >
                {type === "client" ? (
                  <>
                    <FiUser className="mr-2" />
                    Client Project
                  </>
                ) : (
                  <>
                    <FiBriefcase className="mr-2" />
                    Agency Partner
                  </>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-neutral-900/80 rounded-2xl p-8 sm:p-10 shadow-2xl border border-neutral-800 max-w-4xl mx-auto backdrop-blur-sm"
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-12"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 1,
                    ease: "backInOut",
                  }}
                  className="inline-block mb-6"
                >
                  <FiCheckCircle className="text-green-400 text-6xl" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                  Request Received!
                </h3>
                <p className="text-neutral-300 mb-6 max-w-md mx-auto">
                  Our team will review your{" "}
                  {activeTab === "client"
                    ? "project details"
                    : "partnership request"}
                  and get back to you within 24 hours with a tailored proposal.
                </p>
                <div className="mt-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-700"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {/* Common Fields */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-300 mb-2 uppercase tracking-wider"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="text-neutral-500" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-neutral-800/50 border border-neutral-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full pl-10 p-3 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-300 mb-2 uppercase tracking-wider"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className="text-neutral-500" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-neutral-800/50 border border-neutral-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full pl-10 p-3 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-neutral-300 mb-2 uppercase tracking-wider"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiPhone className="text-neutral-500" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-neutral-800/50 border border-neutral-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full pl-10 p-3 transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Conditional Fields */}
                  {activeTab === "client" ? (
                    <>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-neutral-300 mb-2 uppercase tracking-wider">
                          Service Needed
                        </label>

                        {/* Mobile View (Dropdown) */}
                        <div className="lg:hidden">
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-neutral-100 border border-neutral-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          >
                            <option value="" disabled>
                              Select a service
                            </option>
                            {projectTypes.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Desktop View (Grid with buttons) */}
                        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {projectTypes.map((type) => (
                            <div key={type.value} className="flex items-center">
                              <input
                                id={`project-${type.value}`}
                                name="service"
                                type="radio"
                                value={type.value}
                                checked={formData.service === type.value}
                                onChange={handleChange}
                                className="hidden peer"
                              />
                              <label
                                htmlFor={`project-${type.value}`}
                                className="w-full flex items-center gap-3 text-sm font-medium py-3 px-4 rounded-lg bg-neutral-800/50 border border-neutral-700 peer-checked:border-blue-500 peer-checked:bg-blue-900/20 peer-checked:text-blue-400 cursor-pointer transition-all hover:bg-neutral-800"
                              >
                                <span className="text-xl">{type.icon}</span>
                                <span>{type.label}</span>
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className=" col-span-2">
                        <label
                          htmlFor="budget"
                          className="block text-sm font-medium text-neutral-300 mb-2 uppercase tracking-wider"
                        >
                          Project Budget
                        </label>
                        <div className="relative">
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            required
                            className="w-full bg-neutral-800/50 border border-neutral-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block p-3 appearance-none"
                          >
                            {budgetOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-neutral-300 mb-2 uppercase tracking-wider"
                        >
                          Agency Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          className="bg-neutral-800/50 border border-neutral-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full p-3 transition-all"
                          placeholder="Your agency name"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="website"
                          className="block text-sm font-medium text-neutral-300 mb-2 uppercase tracking-wider"
                        >
                          Agency Website
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-neutral-500">https://</span>
                          </div>
                          <input
                            type="text"
                            id="website"
                            name="website"
                            value={formData.website.replace("https://", "")}
                            onChange={handleWebsiteChange}
                            className="bg-neutral-800/50 border border-neutral-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full pl-16 p-3 transition-all"
                            placeholder="yourdomain.com"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-neutral-300 mb-2 uppercase tracking-wider">
                          Partnership Type
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {partnershipTypes.map((type) => (
                            <div key={type.value} className="flex items-center">
                              <input
                                id={`partner-${type.value}`}
                                name="service"
                                type="radio"
                                value={type.value}
                                checked={formData.service === type.value}
                                onChange={handleChange}
                                className="hidden peer"
                              />
                              <label
                                htmlFor={`partner-${type.value}`}
                                className="w-full flex items-center text-sm font-medium py-3 px-4 rounded-lg bg-neutral-800/50 border border-neutral-700 peer-checked:border-blue-500 peer-checked:bg-blue-900/20 peer-checked:text-blue-400 cursor-pointer transition-all hover:bg-neutral-800"
                              >
                                {type.icon}
                                {type.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-300 mb-2 uppercase tracking-wider"
                    >
                      {activeTab === "client"
                        ? "Project Details"
                        : "Partnership Details"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-neutral-800/50 border border-neutral-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full p-3 transition-all"
                      placeholder={
                        activeTab === "client"
                          ? "Describe your project requirements, goals, and any specific needs"
                          : "Describe your partnership proposal and collaboration ideas"
                      }
                    />
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="flex justify-center mt-12"
                >
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="group cursor-pointer relative flex justify-center items-center px-8 py-4 text-sm font-semibold tracking-wider text-white rounded-full overflow-hidden transition-all duration-500 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 w-full max-w-xs sm:max-w-[280px] shadow-lg hover:shadow-xl"
                  >
                    <span className="relative z-10 flex items-center">
                      {activeTab === "client"
                        ? "GET QUOTE NOW"
                        : "REQUEST PARTNERSHIP"}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-3 transition-all duration-300 group-hover:translate-x-1"
                      >
                        <path
                          d="M4.66669 11.3334L11.3334 4.66669"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.66669 4.66669H11.3334V11.3334"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}