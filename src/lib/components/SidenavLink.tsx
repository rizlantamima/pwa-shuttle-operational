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
    <li
      className={
        isActive ? `bg-stone-100 text-emerald-700 rounded-lg` : "rounded-lg"
      }
    >
      <Link
        href={href}
        className="flex items-center py-2 px-5 hover:text-gray-800"
      >
        {icon}

        <span className="ml-2">{label}</span>
      </Link>
    </li>
  );
};

export default SidenavLink;
