import AppNavigation from "@/lib/components/AppNavigation";
import Sidebar from "@/lib/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "PWA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppNavigation />
      <div className="min-h-screen flex">
        <div className="hidden lg:block fixed lg:static lg:translate-x-0 flex-col lg:w-2/12  transition duration-150 ease-in">
          <Sidebar />
        </div>
        <div className="lg:my-4 p-4 grow lg:rounded-l-3xl bg-white">
          <main className="max-w-7xl mx-auto sm:px-6 lg:px-8">{children}</main>
        </div>
      </div>
    </>
  );
}
