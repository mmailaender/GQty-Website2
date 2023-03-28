import { FunctionComponent, memo, type InputHTMLAttributes } from "react";

export type AddOnElement = JSX.Element[] | JSX.Element | string;

export type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "rows"> & {
  name: string;
  type?: string;
  label?: string;
  labelStyle?: "normal" | "hidden" | "inset" | "floating";
  /** A light help text next to label */
  hints?: string;
  placeholder?: string;
  helpText?: string;
  value?: string | string[] | number;
  rounded?: boolean;
  addOns?: {
    leading?: AddOnElement;
    leadingPadding?: boolean;
    trailing?: AddOnElement;
    trailingPadding?: boolean;
  };
  icons?: {
    leading?: AddOnElement;
    trailing?: AddOnElement;
  };
};

export const Input: FunctionComponent<Props> = ({
  name,
  type = "text",
  label,
  labelStyle = "normal",
  hints,
  placeholder,
  helpText,
  value,
  disabled = false,
  rounded = false,
  className = "",
  addOns,
  icons,
  ...props
}) => {
  if (
    (labelStyle === "inset" || labelStyle === "floating") &&
    (addOns?.leading || addOns?.trailing)
  ) {
    throw new Error(
      "Inset labels and floating labels are not compatible with input add ons."
    );
  }

  return (
    <div className={`relative ${labelStyle === "normal" ? "mt-6" : ""}`}>
      {labelStyle === "normal" && (
        <div className="absolute -top-6 left-0 right-0 flex justify-between">
          <label
            id={`input-${name}-label`}
            htmlFor={`input-${name}`}
            className="overflow(ellipsis hidden) whitespace-nowrap block font-medium text(sm gray-700)"
          >
            {label}
          </label>
          <span
            id={`input-${name}-hint`}
            className="overflow(ellipsis hidden) whitespace-nowrap text(sm gray-500)"
          >
            {hints}
          </span>
        </div>
      )}
      {labelStyle === "hidden" && (
        <label
          id={`input-${name}-label`}
          htmlFor={`input-${name}`}
          className="sr-only"
        >
          {label}
        </label>
      )}

      <div className="relative flex flex-wrap items-stretch">
        {labelStyle === "inset" && (
          <div className="absolute top-0 left-0 right-0 pt-2 flex justify-between px-3">
            <label
              id={`input-${name}-label`}
              htmlFor={`input-${name}`}
              className="block overflow(ellipsis hidden) whitespace-nowrap text-xs font-medium text(sm gray-700)"
            >
              {label}
            </label>
            <span
              id={`input-${name}-hint`}
              className="overflow(ellipsis hidden) whitespace-nowrap text(xs gray-500)"
            >
              {hints}
            </span>
          </div>
        )}
        {labelStyle === "floating" && (
          <div className="absolute -mt-4 top-0 left-0 right-0 pt-2 flex justify-between px-2.5">
            <label
              id={`input-${name}-label`}
              htmlFor={`input-${name}`}
              className="block overflow(ellipsis hidden) bg-white px(1 empty:0) whitespace-nowrap text-xs font-medium text(sm gray-700)"
            >
              {label}
            </label>
            <span
              id={`input-${name}-hint`}
              className="overflow(ellipsis hidden) bg-white px(1 empty:0) whitespace-nowrap text(xs gray-500)"
            >
              {hints}
            </span>
          </div>
        )}
        <input
          id={`input-${name}`}
          type={type}
          name={name}
          className={`
              order-3
              block flex-grow outline-none shadow-sm
              ${labelStyle === "inset" ? "pt-6 pb-2" : "py-2"}
              ${icons?.leading ? "pl-8" : "pl-3"}
              ${icons?.trailing ? "pr-8" : "pr-3"} ${
            addOns?.leading
              ? "rounded-l-0"
              : rounded
              ? "rounded-l-full"
              : "rounded-l-md"
          } ${
            addOns?.trailing
              ? "rounded-r-0"
              : rounded
              ? "rounded-r-full"
              : "rounded-r-md"
          }
              border border-gray-300 focus:(border-indigo-500 ring-indigo-500)
              text-gray-900 placeholder-gray-300
              invalid:(
                pr-8
                border-red-300 text-red-900 placeholder-red-300
                siblings:(bg-red-50 children:(bg-red-50 text-red-500) border-red-300 flex)
                focus:(
                  border-red-500 ring-red-500
                  siblings:(border-red-500 ring-red-500)
                )
              )
              disabled:(cursor-not-allowed border-gray-200 bg-gray-50 text-gray-500)
              sm:text-sm
              ${className}`}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          aria-describedby={helpText ? `input-${name}-helpText` : undefined}
          size={1} // sizing hack to prevent flex wrap
          {...props}
        />
        {icons?.leading && (
          <span
            className={`order-2 w-0 translate-x-2.5 overflow-visible z-10 pointer-events-none flex items-center sm:text-sm
              text-gray-400 invalid:(text-red-400)
              !bg-transparent ${labelStyle === "inset" ? "pt-4" : ""}`}
          >
            {icons?.leading}
          </span>
        )}
        {icons?.trailing ? (
          <span
            className={`order-4 w-0 -translate-x-2.5 overflow-visible z-10 pointer-events-none flex items-center sm:text-sm
              text-gray-400 invalid:(text-red-400)
              !bg-transparent ${labelStyle === "inset" ? "pt-4" : ""}`}
            style={{ direction: "rtl" }}
          >
            {icons?.trailing}
          </span>
        ) : (
          <span
            className={`hidden order-4 w-0 -translate-x-2.5 overflow-visible z-10 pointer-events-none items-center sm:text-sm
              text-gray-400 invalid:(text-red-400)
              !bg-transparent ${labelStyle === "inset" ? "pt-4" : ""}`}
            style={{ direction: "rtl" }}
          >
            <i className="fa-fw fa-solid fa-exclamation-circle" />
          </span>
        )}
        {addOns?.leading && (
          <span
            className={`
                order-1
                inline-flex items-center justify-center
                bg-gray-50 text-gray-500 border(& gray-300 r-0) sm:text-sm
                children:(h-full bg-transparent)
                ${addOns?.leadingPadding ?? true ? "px-2.5" : ""}
                ${
                  rounded
                    ? "rounded(l-full children:l-full)"
                    : "rounded(l-md children:l-md)"
                }
              `}
          >
            {addOns.leading}
          </span>
        )}
        {addOns?.trailing && (
          <span
            className={`
              order-5
              min-w-[2.5rem]
              inline-flex items-center justify-center
              bg-gray-50 text-gray-500 border(& gray-300 l-0) sm:text-sm
              children:(h-full border-none)
              ${addOns?.trailingPadding ?? true ? "px-2.5" : ""}
              ${
                rounded
                  ? "rounded(r-full children:r-full)"
                  : "rounded(r-md children:r-md)"
              }`}
          >
            {addOns.trailing}
          </span>
        )}
        {helpText && (
          <p
            id={`input-${name}-helpText`}
            className={`order-6 mt-2 text-sm text-gray-500 !bg-transparent`}
            style={{ flexBasis: "100%" }}
          >
            {helpText}
          </p>
        )}
      </div>
    </div>
  );
};

export default memo(Input);
