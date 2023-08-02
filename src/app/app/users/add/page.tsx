"use client";
import { useEffect, useState } from "react";
import { api } from "@/lib/configurations/api";
import { UserData } from "@/lib/types/user";
import { GeneralResponse } from "@/lib/types/response";
import Skeleton from "@/lib/components/Skeleton";

export default function Page({ params }: { params: { id: number } }) {
  // const [user, setUser] = useState<UserData>();
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // useEffect(() => {
  //   setIsLoading(true);
  //   api
  //     .get<GeneralResponse<UserData>>(`api/users/${params.id}`)
  //     .then((response) => {
  //       setUser(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <>
      <h1 className="font-semibold text-xl leading-tight">User Add</h1>
      <div className="mt-2">asas</div>
    </>
  );
}
