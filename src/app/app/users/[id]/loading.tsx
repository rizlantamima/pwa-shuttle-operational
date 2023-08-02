import Skeleton from "@/lib/components/Skeleton";

export default function Loading({ params }: { params: { id: number } }) {
  return (
    <>
      <h1 className="font-semibold text-xl leading-tight">
        <Skeleton />
      </h1>
      <div className="mt-4">
        <Skeleton count={5} />
      </div>
    </>
  );
}
