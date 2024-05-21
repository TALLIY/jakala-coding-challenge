import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type TableProps = JSX.IntrinsicElements["table"] &
  PropsWithChildren<{
    columns: string[];
    rows: { title: string; link?: string }[][];
    className?: string;
  }>;

export const Table: React.FC<TableProps> = ({
  columns,
  rows,
  className,
  ...rest
}) => {
  return (
    <div className="overflow-x-auto">
      <table className={twMerge("table table-xs", className)} {...rest}>
        <thead>
          <tr>
            <th />
            {columns.map((value, index) => (
              <th key={index}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <th>{index}</th>
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
