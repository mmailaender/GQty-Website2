import { type HTMLAttributes } from "react";

export type Props = Omit<HTMLAttributes<HTMLDivElement>, "size"> & {
  fluid?: boolean;
};

export const Container = ({ className, fluid, ...props }: Props) => (
  <div
    className={`${[
      className ?? "",
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
