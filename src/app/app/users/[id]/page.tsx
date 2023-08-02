"use client";
import { useEffect, useState } from "react";
import { api } from "@/lib/configurations/api";
import { UserData } from "@/lib/types/user";
import { GeneralResponse } from "@/lib/types/response";
import Skeleton from "@/lib/components/Skeleton";

const fetcher = (url: string) => api.get<UserData>(url);

export default function Page({ params }: { params: { id: number } }) {
  const [user, setUser] = useState<UserData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setIsLoading(true);
    api
      .get<GeneralResponse<UserData>>(`api/users/${params.id}`)
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1 className="font-semibold text-xl leading-tight">User Detail</h1>
      <div className="mt-2">
        <div className="flex gap-4 py-4 items-center justify-start divide-x">
          <div className="flex-col h-24">
            {isLoading ? (
              <Skeleton />
            ) : (
              <img
                src={user?.avatar}
                className="h-24 w-24 rounded-full border"
              />
            )}
          </div>
          <div className="flex-col pl-2 grow">
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
              {isLoading ? <Skeleton /> : user?.name}
            </h2>
            <span>{isLoading ? <Skeleton /> : user?.email}</span>
          </div>
          <div className="flex-col pl-2">
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
              {isLoading ? <Skeleton /> : user?.role}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
