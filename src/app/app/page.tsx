"use client";
import ApplicationLogo from "@/lib/components/ApplicationLogo";
import { api } from "@/lib/configurations/api";
import useSWR from "swr";

const fetcher = (url: string) => api.get(url);

export default function Home() {
  const { data, error, isLoading } = useSWR("api/user", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <main className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <ApplicationLogo className="!w-20 !h-20" />
    </main>
  );
}
