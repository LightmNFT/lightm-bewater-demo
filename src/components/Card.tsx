import { PropsWithChildren } from "react";

export default function Card({
  className,
  darkTheme = false,
  children,
}: PropsWithChildren<{ className?: string; darkTheme?: boolean }>) {
  return (
    <div
      className={`${className ? `${className} ` : ""}${
        darkTheme
          ? "text-white border-2 border-white"
          : "bg-gray-200 text-black"
      } flex flex-col items-start rounded-xl p-4 sm:p-8`}
    >
      {children}
    </div>
  );
}
