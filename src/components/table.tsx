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
            <th></th>
            {columns.map((value) => (
              <th>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr>
              <th>{idx}</th>
              {row.map((entry) =>
                entry.link ? (
                  <td>
                    <a className="link" href={entry.link}>
                      {entry.title}
                    </a>
                  </td>
                ) : (
                  <td>{entry.title}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
