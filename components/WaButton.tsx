import { waLink } from "@/lib/site";

export function WaButton({
  msg,
  children,
  variant = "primary",
  className = "",
}: {
  msg: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  return (
    <a
      href={waLink(msg)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`}
    >
      {children}
    </a>
  );
}
