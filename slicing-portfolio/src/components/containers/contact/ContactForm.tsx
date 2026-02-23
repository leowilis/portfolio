"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Button } from "@/src/components/ui/button";

import PopupBg from "@/src/assets/popup/div-popup.svg";
import GridBg from "@/src/assets/popup/grid-popup.svg";
import Message from "@/src/assets/icon/messageblack.svg";
import SuccessIcon from "@/src/assets/icon/success.svg";
import FailedIcon from "@/src/assets/icon/failed.svg";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      setStatus("error");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Your email is invalid or incomplete.");
      setStatus("error");
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage("Please enter your message.");
      setStatus("error");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error();

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setErrorMessage("Something went wrong. Please try sending again.");
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* CONTACT FORM */}
      <section className="px-4 py-5 bg-black">
        <div className="border border-neutral-800 p-4 max-w-xl">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Let’s <span className="text-primary-300">Build Something</span>{" "}
              Great
            </h2>
            <p className="text-neutral-400 text-sm">
              Got an idea, a project, or just want to connect? I’m always open
              to new conversations.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Name</label>
              <Input
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                required
                className="bg-transparent border-neutral-800 text-white placeholder:text-neutral-500 focus:border-primary-400 h-12"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Email</label>
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                required
                className="bg-transparent border-neutral-800 text-white placeholder:text-neutral-500 focus:border-primary-300 h-12"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Message</label>
              <Textarea
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                required
                className="bg-transparent border-neutral-800 text-white placeholder:text-neutral-500 focus:border-primary-300 min-h-40 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-black hover:bg-neutral-200 py-6 text-base font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Image src={Message} alt="message" width={22} height={16} />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </section>

      {/* STATUS MODAL */}
      {status && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div
            className={`
              relative w-[461px] h-[400px] overflow-hidden 
              ${status === "success" ? "border-[#1F6B75]" : "border-[#7A1D1D]"}
              bg-[#04090B]
            `}
          >
            <Image
              src={PopupBg}
              alt="popup background"
              fill
              className="object-cover pointer-events-none select-none"
            />
            <Image
              src={GridBg}
              alt="grid background"
              fill
              className="object-cover opacity-30 pointer-events-none select-none"
            />

            <div className="relative z-10 flex flex-col items-center text-center px-4 pt-[20px]">
              <div className="relative flex items-center justify-center mb-18">
                <Image
                  src={status === "success" ? SuccessIcon : FailedIcon}
                  alt="status"
                  width={130}
                  height={100}
                  className="relative z-10"
                />
              </div>

              <h3 className="text-white text-[17px] font-semibold mb-3">
                {status === "success"
                  ? "Thanks for Reaching Out!"
                  : "Message Not Sent"}
              </h3>

              <p className="text-neutral-400 text-[15px] leading-[25px] mb-6 max-w-[340px]">
                {status === "success"
                  ? "I've received your message and will get back to you shortly."
                  : errorMessage}
              </p>

              <button
                onClick={() => setStatus(null)}
                className={`
                  w-full h-[44px] rounded-full font-semibold transition
                  ${
                    status === "success"
                      ? "bg-[#14BBB0] hover:bg-[#11A79D] text-white"
                      : "bg-[#EF4444] hover:bg-[#DC2626] text-white"
                  }
                `}
              >
                {status === "success" ? "Back to Home" : "Try Again"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
