// src/components/Drawer.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Drawer({ open, onClose, children }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
          />

          {/* Drawer panel */}
          <motion.div
            className="fixed top-0 right-0 h-full w-100 bg-white shadow-lg z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {/* Close button */}
            <div className="flex justify-end p-4 border-b">
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-black text-lg"
              >
                ✕
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto p-4">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
