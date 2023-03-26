import { FunctionComponent, HTMLAttributes, useEffect, useState } from "react";
import { AlertOctagon, AlertTriangle, CheckCircle } from "react-feather";

export type Props = HTMLAttributes<HTMLDivElement> & {
  icon?: React.ReactNode;
  severity?: "error" | "warning" | "info" | "success";
  title?: string;
};

const severityColor = {
  error: "red",
  warning: "yellow",
  info: "blue",
  success: "green",
};

const severityIcons = {
  error: (
    <AlertOctagon
      className="h-5 w-5 text-red(400 dark:300)"
      aria-hidden="true"
    />
  ),
  warning: (
    <AlertTriangle
      className="h-5 w-5 text-yellow(500 dark:300)"
      aria-hidden="true"
    />
  ),
  info: (
    <span className="inline-block h-5 w-5 cursor-default" aria-hidden="true">
      💡
    </span>
  ),
  success: (
    <CheckCircle
      className="h-5 w-5 text-green(500 dark:400)"
      aria-hidden="true"
    />
  ),
};

const Alert: FunctionComponent<Props> = ({
  severity = "info",
  icon = severityIcons[severity],
  title,
  children,
  className,
  ...props
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const color = severityColor[severity];

  return (
    <div
      className={`rounded-md p-4 bg-${color}(100 dark:700) ${className}`}
      {...props}
    >
      <div className="flex">
        <div className="flex-shrink-0">{icon}</div>
        <div className="ml-3">
          {title && (
            <h3
              className={`mb-2 text-sm font-bold text-${color}(800 dark:200)`}
            >
              {title}
            </h3>
          )}
          <p className={`text-sm text-${color}(800 dark:200)`}>{children}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
