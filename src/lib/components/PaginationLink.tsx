import Link from "next/link";
import { last } from "../utils/slice";
import { PaginatedLinks } from "../types/list-response";

type PaginationLink = {
  from: number | null;
  to: number | null;
  total: number | null;
  pathname: string | null;
  prevPageUrl: string | null;
  nextPageUrl: string | null;
  links: PaginatedLinks[];
};
export default function PaginationLink(props: PaginationLink) {
  const { prevPageUrl, pathname, nextPageUrl, links, from, to, total } = props;
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between md:hidden">
        <Link
          href={
            prevPageUrl ? `${pathname}?${last(prevPageUrl?.split("?"))}` : `#`
          }
          className={`relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 ${
            prevPageUrl
              ? `bg-white hover:bg-gray-50`
              : `bg-gray-300 cursor-not-allowed`
          }`}
        >
          Previous
        </Link>
        <Link
          href={
            nextPageUrl ? `${pathname}?${last(nextPageUrl?.split("?"))}` : `#`
          }
          className={`relative inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 ${
            nextPageUrl
              ? `bg-white hover:bg-gray-50`
              : `bg-gray-300 cursor-not-allowed`
          }`}
        >
          Next
        </Link>
      </div>
      <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{from}</span> to{" "}
            <span className="font-medium">{to}</span> of{" "}
            <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {links.map((v, i) => {
              if (!v.url) {
                return (
                  <span
                    key={i}
                    className={`relative cursor-not-allowed  inline-flex items-center px-4 py-2 text-sm font-semibold  bg-gray-100`}
                    dangerouslySetInnerHTML={{ __html: v.label }}
                  />
                );
              }
              return (
                <Link
                  key={i}
                  href={v.url ? `${pathname}?${last(v.url?.split("?"))}` : `#`}
                  className={`relative ${
                    v.active
                      ? "bg-blue-200 text-blue-600"
                      : "text-gray-900 hover:bg-gray-50"
                  } inline-flex items-center px-4 py-2 text-sm font-semibold  ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0`}
                >
                  <span dangerouslySetInnerHTML={{ __html: v.label }} />
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
