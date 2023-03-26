import type { FunctionComponent, JSX } from "react";

export type Props = JSX.HTMLAttributes<HTMLAnchorElement> & {
  icon?: JSX.Element;
  active?: boolean;
};

export const SidebarItem: FunctionComponent<Props> = ({
  active,
  icon,
  children,
  class: classProp,
  className,
  href,
  id = href,
  ...props
}) => (
  <a
    id={id}
    href={href}
    className={`${classProp} ${className}
    group flex items-center px-2 py-2 text-base rounded-md
    ${
      active
        ? `bg-gray-900 text-white font-medium`
        : `text-gray-300 hover:(bg-gray-700 text-white)`
    }`}
    {...props}
  >
    {icon && (
      <span
        className={
          active
            ? "text-gray(500 group-hover:500)"
            : "text-gray(400 group-hover:500)"
        }
      >
        {icon}
      </span>
    )}

    {children}
  </a>
);

export default SidebarItem;
