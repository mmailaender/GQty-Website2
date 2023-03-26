import type { JSX } from "react";
import { memo } from "react";
import type { Accents } from "./Accents";
import type { Breakpoints } from "./Breakpoints";

const IS_BROWSER = typeof window !== "undefined";

export type Props = Omit<JSX.HTMLAttributes<HTMLButtonElement>, "size"> & {
  accent?: Accents;
  size?: Breakpoints;
  rounded?: boolean;
};

export const Button = ({
  accent = "primary",
  size = "md",
  rounded,
  class: classProp = "",
  className = "",
  disabled,
  ...props
}: Props) => (
  <button
    type="button"
    disabled={!IS_BROWSER || disabled}
    className={`
      ${classProp} ${className}
      inline-flex items-center border font-medium shadow-sm
      focus:(outline-none ring(2 indigo-500 offset-2))
      ${
        accent === "primary"
          ? `border-transparent bg-indigo(600 hover:700) text-white`
          : accent === "secondary"
          ? `border-transparent bg-indigo(100 hover:200)`
          : accent === "white"
          ? `border-gray-300 bg(white hover:gray-50)`
          : ``
      }
      ${
        size === "xs"
          ? `${
              rounded === undefined
                ? `rounded`
                : rounded
                ? `rounded-full p-1`
                : `px-2.5 py-1.5`
            } text-xs`
          : size === "sm"
          ? `${
              rounded === undefined
                ? `rounded-md`
                : rounded
                ? `rounded-full p-1.5`
                : `px-3 py-2`
            }  text-sm leading-4`
          : size === "md"
          ? `${
              rounded === undefined
                ? `rounded-md`
                : rounded
                ? `rounded-full p-2`
                : `px-4 py-2`
            } text-sm`
          : size === "lg"
          ? `${
              rounded === undefined
                ? `rounded-md`
                : rounded
                ? `rounded-full p-2`
                : `px-4 py-2`
            } text-base`
          : size === "xl"
          ? `${
              rounded === undefined
                ? `rounded-md`
                : rounded
                ? `rounded-full p-3`
                : `px-6 py-3`
            } text-base`
          : ``
      }`}
    {...props}
  />
);

export default memo(Button);
