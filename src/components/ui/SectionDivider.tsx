interface SectionDividerProps {
  variant?: "gold" | "primary";
}

export default function SectionDivider({ variant = "gold" }: SectionDividerProps) {
  const fill = variant === "primary" ? "#6B1D2A" : "#C9A96E";
  return (
    <div className="relative w-full h-[60px] md:h-[80px] -mb-px overflow-hidden bg-white">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
      >
        <path
          d="M0,40 C360,80 720,0 1440,40 L1440,0 L0,0 Z"
          fill={fill}
          opacity="0.06"
        />
      </svg>
    </div>
  );
}
