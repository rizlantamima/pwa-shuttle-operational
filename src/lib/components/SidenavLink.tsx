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
    <li>
      <Link
        href={href}
        className={`flex items-center py-2 px-5 rounded hover:text-gray-800 ${
          isActive ? "bg-emerald-700 text-white" : ""
        }`}
      >
        {icon}

        <span className="ml-2">{label}</span>
      </Link>
    </li>
  );
};

export default SidenavLink;
