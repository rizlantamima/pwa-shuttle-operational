"use client";
import { usePathname } from "next/navigation";
import ApplicationLogo from "./ApplicationLogo";
import SidenavLink from "./SidenavLink";
import {
  CalendarDaysIcon,
  UserGroupIcon,
  TagIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import {
  HomeIcon,
  ShoppingBagIcon,
  WrenchIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar(props: React.HTMLProps<HTMLDivElement>) {
  const pathname = usePathname();
  // const currentPath = router.pathname;

  const dataMenu = [
    {
      title: "",
      children: [
        {
          href: "#",
          label: "Upcoming Order",
          icon: <TagIcon className="w-6 h-6" />,
        },
      ],
    },
    {
      title: "Main",
      children: [
        {
          href: "/app",
          label: "Home",
          icon: <HomeIcon className="w-6 h-6" />,
        },
        {
          href: "/app/order",
          label: "Order",
          icon: <ShoppingBagIcon className="w-6 h-6" />,
        },
        {
          href: "/app/schedule",
          label: "Schedule",
          icon: <CalendarDaysIcon className="w-6 h-6" />,
        },
      ],
    },
    {
      title: "Data",
      children: [
        {
          href: "/app/customers",
          label: "Customers",
          icon: <UserGroupIcon className="w-6 h-6" />,
        },
        {
          href: "/app/vehicle-types",
          label: "Vehicle Types",
          icon: <WrenchIcon className="w-6 h-6" />,
        },
        {
          href: "/app/vehicles",
          label: "Vehicles",
          icon: <BoltIcon className="w-6 h-6" />,
        },
        {
          href: "/app/users",
          label: "Users",
          icon: <UserIcon className="w-6 h-6" />,
        },
      ],
    },
  ];
  return (
    <nav role="navigation" className="p-6">
      <div className="gap-4 pb-4">
        <ApplicationLogo className="mx-auto" />
      </div>

      <div className="mt-4 -mx-4 relative h-[85vh]">
        {dataMenu.map((v, i) => {
          return (
            <div key={i}>
              <span className="uppercase px-4 text-gray-500 mb-2 block">
                {v.title}
              </span>
              <ul className="text-sm pb-8">
                {v.children.map((vc, ic) => {
                  return (
                    <SidenavLink
                      key={ic}
                      href={vc.href}
                      label={vc.label}
                      isActive={vc.href == pathname}
                      icon={vc.icon}
                    />
                  );
                })}
              </ul>
            </div>
          );
        })}

        <div className="absolute px-4 py-2 w-full bottom-0 hover:bg-stone-50 cursor-pointer rounded-lg">
          <HomeIcon className="w-6 h-6 inline-block" />
          <span className="ml-2">Log Out</span>
        </div>
      </div>
    </nav>
  );
}
