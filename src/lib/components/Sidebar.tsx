import ApplicationLogo from "./ApplicationLogo";
import SidenavLink from "./SidenavLink";
import { FaTags, FaDoorOpen } from "react-icons/fa";

export default function Sidebar(props: React.HTMLProps<HTMLDivElement>) {
  const dataMenu = [
    {
      title: "Docs",
      children: [
        {
          href: "#",
          label: "order",
          isActive: false,
          icon: <FaTags className="w-6 h-6" />,
        },
      ],
    },
    {
      title: "",
      children: [
        {
          href: "/",
          label: "Logout",
          isActive: false,
          icon: <FaDoorOpen className="w-6 h-6" />,
        },
      ],
    },
  ];
  return (
    <nav role="navigation" className="p-6  overflow-y-auto overflow-x-hidden">
      <div className="gap-4 pb-4">
        <ApplicationLogo className="mx-auto" />
      </div>

      <div className="mt-4 -mx-4 relative h-[85vh]">
        {dataMenu.map((v, i) => {
          return (
            <div>
              <span className="uppercase px-4 text-gray-500 mb-2 block">
                {v.title}
              </span>
              <ul className="text-sm pb-8">
                {v.children.map((vc, ic) => {
                  return (
                    <SidenavLink
                      href={vc.href}
                      label={vc.label}
                      isActive={vc.isActive}
                      icon={vc.icon}
                    />
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
