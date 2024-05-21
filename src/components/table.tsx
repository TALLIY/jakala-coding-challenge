import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type TableProps = JSX.IntrinsicElements["table"] &
  PropsWithChildren<{
    columns: string[];
    rows: { title: string; link?: string }[][];
    pageNumber: number;
    containerClassName?: string;
    className?: string;
  }>;

export const Table: React.FC<TableProps> = ({
  columns,
  rows,
  containerClassName,
  className,
  pageNumber,
  ...rest
}) => {
  return (
    <div
      className={twMerge(
        "overflow-x-auto w-full flex flex-row justify-center p-4",
        containerClassName
      )}
    >
      <table className={twMerge("table table-zebra", className)} {...rest}>
        <thead>
          <tr>
            {columns.map((value, index) => (
              <th key={index}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((entry, idx) =>
                entry.link ? (
                  <td key={idx}>
                    <a className="link" href={entry.link}>
                      {entry.title}
                    </a>
                  </td>
                ) : (
                  <td key={idx}>{entry.title}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
