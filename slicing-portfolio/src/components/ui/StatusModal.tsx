"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface StatusModalProps {
  open: boolean;
  type: "success" | "error";
  onClose: () => void;
  onRetry?: () => void;
}

export default function StatusModal({
  open,
  type,
  onClose,
  onRetry,
}: StatusModalProps) {
  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div
              className={`
              relative
              w-[380px]
              rounded-2xl
              border
              px-8 py-8
              text-center
              shadow-2xl
              ${
                isSuccess
                  ? "bg-[#061c20] border-[#0ea5b7]"
                  : "bg-[#1a0606] border-[#ef4444]"
              }
            `}
            >
              {/* glow background */}
              <div
                className={`
                absolute inset-0 blur-3xl opacity-30
                ${isSuccess ? "bg-cyan-500/30" : "bg-red-500/30"}
              `}
              />

              {/* icon circle */}
              <div
                className={`
                relative mx-auto mb-4
                w-16 h-16
                flex items-center justify-center
                rounded-full
                ${isSuccess ? "bg-cyan-500/20" : "bg-red-500/20"}
              `}
              >
                <Image
                  src={
                    isSuccess
                      ? "/assets/icon/success.svg"
                      : "/assets/icon/failed.svg"
                  }
                  alt="status"
                  width={100}
                  height={32}
                />
              </div>

              {/* title */}
              <h3 className="text-white text-lg font-semibold mb-2">
                {isSuccess ? "Thanks for Reaching Out!" : "Message Not Sent"}
              </h3>

              {/* description */}
              <p className="text-neutral-400 text-sm mb-6">
                {isSuccess
                  ? "I’ve received your message and will get back to you shortly."
                  : "Something broke along the way. Let’s try resending it."}
              </p>

              {/* button */}
              {isSuccess ? (
                <button
                  onClick={onClose}
                  className="w-full py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400"
                >
                  Back to Home
                </button>
              ) : (
                <button
                  onClick={onRetry}
                  className="w-full py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-400"
                >
                  Try Again
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
