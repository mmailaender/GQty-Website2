import type { FunctionComponent, PropsWithChildren } from "react";
import { memo } from "react";

export const Sidebar: FunctionComponent<
  PropsWithChildren<{
    logo?: {
      src: string;
      alt: string;
    };
    header?: JSX.Element | JSX.Element[] | string;
    footer?: JSX.Element[];
    location?: Location;
  }>
> = ({ header, footer, children }) => {
  return (
    <div
      className="
      flex(& col none) group
      h-screen w([83.33vw] md:[33.33vw] lg:[25vw])
      fixed z-50 left([-83.33vw] md:[-33.33vw] lg:0 hover:0)
      transition(all lg:none)
      bg-gray-800
    "
    >
      <div
        className="
        flex lg:hidden items-center justify-center rounded-full
        w-14 h-14 -mr-14 md:(w-20 h-20 -mr-10)
        absolute top-0 right-0 md:inset-0 !left-auto my-auto
      "
      >
        <div className="transform group-hover:hidden">
          <i className="md:hidden text-gray-400 fa-solid fa-bars fa-2x" />
          {/* <span className="md:hidden fa-stack fa-2x">
              <i className="text-gray-400 fa-solid fa-bars fa-stack-1x" />
              <i className="text-gray-400 scale-50 translate-x-5 fa-solid fa-caret-right fa-stack-1x" />
            </span> */}
          <i className="hidden md:inline text-gray-400 translate-x-2 fa-solid fa-caret-right fa-2x" />
        </div>
      </div>

      <div className="flex(& 1 col) overflow-y-auto">
        {header && (
          <div className="flex(& shrink-0) items-center bg-gray-900 px-4 pt-5 pb-4">
            {/* <img className="h-8 w-auto" src={logo.src} alt={logo.alt} /> */}
            {header}
          </div>
        )}

        <nav
          className="flex-1 space-y-1 bg-gray-800 px-2 mt-2"
          aria-label="Sidebar"
        >
          {children}
          {/* children.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
              )}
            >
              <item.icon
                className={(item.current
                  ? "text-gray-300"
                  : "text-gray-400 group-hover:text-gray-300") +
                  "mr-3 flex-shrink-0 h-6 w-6"}
                aria-hidden="true"
              />
              <span className="flex-1">{item.name}</span>
              {item.count
                ? (
                  <span
                    className={classNames(
                      item.current
                        ? "bg-gray-800"
                        : "bg-gray-900 group-hover:bg-gray-800",
                      "ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full",
                    )}
                  >
                    {item.count}
                  </span>
                )
                : null}
            </a>
          ))} */}
        </nav>
      </div>
      <div className="flex(& shrink-0) bg-gray-700 p-4">
        <a href="#" className="group block w-full flex-shrink-0">
          <div className="flex items-center">
            <div>
              <img
                className="inline-block h-9 w-9 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">Tom Cook</p>
              <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">
                View profile
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default memo(Sidebar);
