"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

const MotionLink = motion(Link);

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const base = "relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 overflow-hidden group";

  const sizes: Record<string, string> = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const variants: Record<string, string> = {
    primary:
      "bg-primary text-white hover:bg-primary-light shadow-md hover:shadow-lg",
    gold:
      "bg-gold text-white hover:bg-gold-dark shadow-md hover:shadow-lg",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost:
      "text-primary hover:bg-primary/5",
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 rounded-full bg-white/20"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 2, opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
    </>
  );

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    if (href.startsWith("http") || href.startsWith("tel") || href.startsWith("mailto")) {
      return (
        <motion.a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={classes}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <MotionLink
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
}
