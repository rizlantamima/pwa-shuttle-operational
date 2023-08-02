"use client";
import Skeleton from "@/lib/components/Skeleton";
import { api } from "@/lib/configurations/api";
import { PaginatedData } from "@/lib/types/list-response";
import { UserData } from "@/lib/types/user";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import PaginationLink from "@/lib/components/PaginationLink";
import Link from "next/link";

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
      <div className="flex justify-between">
        <h1 className="font-semibold text-xl leading-tight">Users</h1>
        <div>
          <Link href={`${pathname}/add`} className="btn-primary">
            add
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <table className="w-full">
          <thead>
            <tr>
              <th className="hidden md:table-cell">No</th>
              <th>Name & Email</th>
              <th className="hidden md:table-cell">Status</th>
              <th className="hidden md:table-cell">Role</th>
              <th className="hidden md:table-cell">&nbsp;</th>
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
                  <td className="hidden md:table-cell">{item.row_number}</td>
                  <td>
                    <span className="font-semibold">{item.name}</span>
                    <p>{item.email}</p>
                  </td>
                  <td className="hidden md:table-cell">
                    {!item.is_blocked ? (
                      <span className="badge-success">Active</span>
                    ) : (
                      <span className="badge-danger">Blocked</span>
                    )}
                  </td>
                  <td className="hidden md:table-cell">{item.role}</td>
                  <td>{item.id}</td>
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
