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
    <html lang="en">
      <body className="font-sans antialiased">
        <AppNavigation />
        <div className="min-h-screen flex">
          <div className="hidden lg:block fixed lg:static lg:translate-x-0 flex-col w-6/12 md:w-4/12 lg:w-3/12  transition duration-150 ease-in">
            <Sidebar />
          </div>
          <div className="lg:my-4 p-4 grow lg:rounded-l-3xl bg-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
