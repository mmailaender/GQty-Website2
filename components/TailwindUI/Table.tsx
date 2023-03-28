import { type ColHTMLAttributes } from "react";

export type ColumnDefinition<T = any> =
  ColHTMLAttributes<HTMLTableColElement> & {
    label?: string;
    /** key of the data object */
    key: string;
    render?: (
      data: T,
      column: ColumnDefinition<T>
    ) => JSX.Element | string | number | boolean | undefined | null;
  };

export type TableProps<T = Record<string, any>> = {
  columns: ColumnDefinition[];
  data: Record<string, T>[];
  footer?: JSX.Element;
};

const defaultRenderer = (
  data: Record<string, any>,
  { key }: ColumnDefinition
) => {
  const value = data[key];

  if (value instanceof Date) {
    return value.toISOString();
  } else if (typeof value === "object") {
    return JSON.stringify(value);
  } else {
    return `${value}`;
  }
};

export default function Table<T extends TableProps>({
  columns,
  data,
  footer,
}: T) {
  return (
    <div className="inline-block min-w-full py-2 align-middle">
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <colgroup>
            {columns.map(({ label: _label, key: _key, ...props }, i) => (
              <col key={`col-${i}`} {...props} />
            ))}
          </colgroup>
          <thead className="bg-gray-50">
            <tr>
              {columns.map(({ key, label = key }, i) => (
                <th
                  key={`header-${i}`}
                  scope="col"
                  className="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900 first:(pr-3 sm:pl-6) last:(pl-3 sm:pr-6)"
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((row, i) => (
              <tr key={`row#${i}`}>
                {columns.map((column) => (
                  <td
                    key={`cell#${i}-${column.key}`}
                    className="max-w-0 overflow(ellipsis hidden) whitespace-nowrap py-4 pl-4 text-sm text-gray-900 first:(pr-3 sm:pl-6) last:(pl-3 sm:pr-6)"
                  >
                    {(column.render ?? defaultRenderer)(row, column)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          {footer && (
            <tfoot className="bg-white">
              <tr>
                <td
                  colSpan={columns.length}
                  className="pb-3.5 pl-4 text-left text-sm text-gray-900 first:(pr-3 sm:pl-6) last:(pl-3 sm:pr-6)"
                >
                  {footer}
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
}
