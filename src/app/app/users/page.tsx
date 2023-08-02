"use client";
import Skeleton from "@/lib/components/Skeleton";
import { api } from "@/lib/configurations/api";
import { PaginatedData, UserData } from "@/lib/types/list-response";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import PaginationLink from "@/lib/components/PaginationLink";

const fetcher = (url: string) => api.get<PaginatedData<UserData>>(url);

export default function UserList() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { data, error, isLoading } = useSWR(
    "api/users?" + searchParams,
    fetcher
  );

  const handleRowClicked = (id: any) => {
    router.push(`${pathname}/${id}`);
  };

  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <main className="py-6 sm:py-0 px-2 sm:px-0">
        <h1 className="font-semibold text-xl leading-tight">
          <Skeleton />
        </h1>
        <div className="mt-4">
          <Skeleton count={5} />
        </div>
      </main>
    );

  return (
    <>
      <h1 className="font-semibold text-xl leading-tight">Users</h1>
      <div className="mt-4">
        <table className="w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name & Email</th>
              <th>Status</th>
              <th>Role</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {data!.data.data.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="cursor-pointer hover:bg-emerald-50"
                  onClick={(e) => handleRowClicked(item.id)}
                >
                  <td>{item.row_number}</td>
                  <td>
                    <span className="font-semibold">{item.name}</span>
                    <p>{item.email}</p>
                  </td>
                  <td>
                    {!item.is_blocked ? (
                      <span className="badge-success">Active</span>
                    ) : (
                      <span className="badge-danger">Blocked</span>
                    )}
                  </td>
                  <td>{item.role}</td>
                  <td>{item.role}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={99}>
                <PaginationLink
                  from={data!.data.from}
                  to={data!.data.to}
                  total={data!.data.total}
                  pathname={pathname}
                  prevPageUrl={data!.data.prev_page_url}
                  nextPageUrl={data!.data.next_page_url}
                  links={data!.data.links}
                />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}
