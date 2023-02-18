import Link from "next/link";

export default function PulsedLink({ children, href }) {
  return (
    <div>
      <Link href={href || ""}>{children}</Link>
    </div>
  );
}
