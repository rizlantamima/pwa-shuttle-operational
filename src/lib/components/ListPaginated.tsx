import { AxiosResponse } from "axios";
import { PaginatedData } from "../types/list-response";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import PaginationLink from "./PaginationLink";

type ListPaginatedProps = {
  response: AxiosResponse<PaginatedData<any>>;
  columns: React.ReactElement[];
  data: {
    [x: number]: React.ReactElement[];
  }[];
};
export default function ListPaginated(props: ListPaginatedProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <table className="w-full">
      <thead>
        <tr>{props.columns.map((v, i) => (v.key = i))}</tr>
      </thead>
      <tbody>
        {props.data.map((vrow, i) => {
          const key = Object.keys(vrow)[0];
          const values = Object.values(vrow)[0];
          return (
            <tr
              className="cursor-pointer"
              key={key + `row`}
              onClick={(e) => {
                e.preventDefault();
                router.push(`${pathname}/${key}`);
              }}
            >
              {values.map((v, icel) => (
                <td key={icel + `cel`}>{v}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={99}>
            <PaginationLink
              from={props.response.data.from}
              to={props.response.data.to}
              total={props.response.data.total}
              pathname={pathname}
              prevPageUrl={props.response.data.prev_page_url}
              nextPageUrl={props.response.data.next_page_url}
              links={props.response.data.links}
            />
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
