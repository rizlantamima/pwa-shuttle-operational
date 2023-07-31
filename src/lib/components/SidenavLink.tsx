import Link from "next/link";
import { ReactNode } from "react";

type SidenavLinkProps = {
  href: string;
  isActive: boolean;
  icon: ReactNode;
  label: string;
};
const SidenavLink = (props: SidenavLinkProps) => {
  const { href, isActive, icon, label } = props;
  return (
    <Link
      href={href}
      className={`flex items-center py-2 px-5 rounded hover:text-gray-800 transition ${
        isActive ? "bg-cyan-500text-cyan-500" : ""
      }`}
    >
      {icon}

      <span className="ml-2">{label}</span>
    </Link>
  );
};

export default SidenavLink;
