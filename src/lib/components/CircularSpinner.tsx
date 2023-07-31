export default function CircularSpinner(
  props: React.HTMLProps<HTMLDivElement>
) {
  return (
    <div
      className={` ${props.className} animate-spin rounded-full h-10 w-10 border-t-4 border-white-500`}
    ></div>
  );
}
