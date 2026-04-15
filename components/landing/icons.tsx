import { type ComponentProps } from "react";

type IconProps = ComponentProps<"svg">;

export function ArrowRight(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

export function PlayCircle(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.7v6.6L15.8 12 10 8.7Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Sparkles(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3l1.8 4.4L18 9.2l-4.2 1.8L12 15l-1.8-4-4.2-1.8 4.2-1.8L12 3Z" />
      <path d="M18.6 3.9l.7 1.7 1.7.7-1.7.7-.7 1.7-.7-1.7-1.7-.7 1.7-.7.7-1.7Z" />
      <path d="M5.4 15.1l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1Z" />
    </svg>
  );
}

export function BrainCircuit(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8.5 5.5A3.5 3.5 0 0 1 12 2a3.5 3.5 0 0 1 3.5 3.5v13A3.5 3.5 0 0 1 12 22a3.5 3.5 0 0 1-3.5-3.5v-13Z" />
      <path d="M15.5 8h2.5M15.5 12h3.5M15.5 16H18M8.5 8H6M8.5 12H4.5M8.5 16H6" />
      <circle cx="18.8" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="4.8" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LayoutTemplate(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 9v11M16 9v11" />
    </svg>
  );
}

export function GaugeCircle(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 14a8 8 0 0 1 16 0" />
      <path d="M12 14l4-4" />
      <circle cx="12" cy="14" r="1.4" fill="currentColor" stroke="none" />
      <path d="M5.4 18A10 10 0 0 0 18.6 18" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12.5l4.2 4.2L19 7" />
    </svg>
  );
}