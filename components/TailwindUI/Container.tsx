import type { JSX } from "react";
export type Props = Omit<JSX.HTMLAttributes<HTMLDivElement>, "size"> & {
  fluid?: boolean;
};

export const Container = ({
  className,
  class: classProp,
  fluid,
  ...props
}: Props) => (
  <div
    className={`${[
      className ?? "",
      classProp ?? "",
      fluid ? `max-w-full` : `container`,
      `mx-auto sm:px-6 lg:px-8`,
    ]
      .map((classes) => classes.split(/\s+/))
      .flat()
      .filter(Boolean)
      .join(" ")}`}
    {...props}
  />
);
