export type IconName =
  | "heart"
  | "heart-filled"
  | "bookmark"
  | "bookmark-filled"
  | "star"
  | "star-filled"
  | "share"
  | "link"
  | "x"
  | "facebook"
  | "linkedin"
  | "check";

const paths: Record<IconName, React.ReactNode> = {
  heart: (
    <path
      d="M12 21s-6.7-4.35-9.3-8.2C.8 9.9 1.7 6.6 4.4 5.1c2.2-1.2 4.7-.5 6.1 1.4.5.6.9 1.3 1.5 1.3s1-.7 1.5-1.3c1.4-1.9 3.9-2.6 6.1-1.4 2.7 1.5 3.6 4.8 1.7 7.7C18.7 16.65 12 21 12 21z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  ),
  "heart-filled": (
    <path
      d="M12 21s-6.7-4.35-9.3-8.2C.8 9.9 1.7 6.6 4.4 5.1c2.2-1.2 4.7-.5 6.1 1.4.5.6.9 1.3 1.5 1.3s1-.7 1.5-1.3c1.4-1.9 3.9-2.6 6.1-1.4 2.7 1.5 3.6 4.8 1.7 7.7C18.7 16.65 12 21 12 21z"
      fill="currentColor"
    />
  ),
  bookmark: (
    <path
      d="M6 3h12a1 1 0 0 1 1 1v16.2a.8.8 0 0 1-1.25.66L12 17.2l-5.75 3.66A.8.8 0 0 1 5 20.2V4a1 1 0 0 1 1-1z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  ),
  "bookmark-filled": (
    <path
      d="M6 3h12a1 1 0 0 1 1 1v16.2a.8.8 0 0 1-1.25.66L12 17.2l-5.75 3.66A.8.8 0 0 1 5 20.2V4a1 1 0 0 1 1-1z"
      fill="currentColor"
    />
  ),
  star: (
    <path
      d="M12 3.5l2.47 5.51 6.03.57-4.53 4.05 1.32 5.9L12 16.7l-5.29 2.83 1.32-5.9-4.53-4.05 6.03-.57L12 3.5z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  ),
  "star-filled": (
    <path
      d="M12 3.5l2.47 5.51 6.03.57-4.53 4.05 1.32 5.9L12 16.7l-5.29 2.83 1.32-5.9-4.53-4.05 6.03-.57L12 3.5z"
      fill="currentColor"
    />
  ),
  share: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M8.3 10.7l7.4-4.4M8.3 13.3l7.4 4.4" />
    </g>
  ),
  link: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.5 13.5a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1.2 1.2" />
      <path d="M13.5 10.5a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5l1.2-1.2" />
    </g>
  ),
  x: (
    <path
      d="M4 4l7.1 9.1L4.3 20h1.8l6-6.6 4.6 6.6H20l-7.4-9.6L19.2 4h-1.8l-5.5 6-4.2-6H4z"
      fill="currentColor"
    />
  ),
  facebook: (
    <path
      d="M14 21v-7.5h2.5l.4-3H14V8.5c0-.9.25-1.5 1.5-1.5H17V4.3c-.26-.04-1.14-.11-2.16-.11-2.14 0-3.6 1.3-3.6 3.7V10.5H9v3h2.24V21H14z"
      fill="currentColor"
    />
  ),
  linkedin: (
    <path
      d="M6.94 8.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88zM5 10.5h3.9V20H5v-9.5zm5.9 0h3.74v1.3h.05c.52-.98 1.8-2 3.7-2 3.96 0 4.7 2.6 4.7 6V20h-3.9v-4.9c0-1.17-.02-2.68-1.63-2.68-1.63 0-1.88 1.28-1.88 2.6V20h-3.9V10.5z"
      fill="currentColor"
    />
  ),
  check: (
    <path
      d="M5 12.5l4.5 4.5L19 7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function Icon({
  name,
  className,
  size = 18,
}: {
  name: IconName;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
