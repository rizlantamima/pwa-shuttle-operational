import ApplicationLogo from "@/lib/components/ApplicationLogo";
import LoginForm from "@/lib/components/LoginForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <ApplicationLogo className="!w-20 !h-20" />
      <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <LoginForm />
      </div>
    </main>
  );
}
