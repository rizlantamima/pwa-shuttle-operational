import Skeletons from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type SkeletonProps = {
  count?: number;
  className?: string;
  containerClassName?: string;
  containerTestId?: string;
  circle?: boolean;
};

export default function Skeleton(props: SkeletonProps) {
  return <Skeletons {...props} />;
}
