import CustomButton from "./CustomButton";
import Image from "next/image";

type Header = {
  id: string;
  value: string;
  label: string;
  width: string;
};

type TableButtons = {
  id: number;
  name: string;
  handleClick: () => void;
};

type CustomTableProps = {
  header: Header[];
  data: any[];
  tableButtons: TableButtons[];
};

export default function CustomTable({
  header,
  data,
  tableButtons,
}: CustomTableProps) {
  const headerList = header.map((headerItem) => headerItem.value);

  return (
    <div className="border border-slate-300 rounded-xl overflow-hidden">
      <table className="w-full table-fixed bg-white">
        <thead>
          <tr className="w-full">
            {header.map((headerItem) => (
              <th
                key={headerItem.id}
                className={`px-4 py-2 text-slate-500 font-medium text-left`}
                style={{ width: headerItem.width }}
              >
                <div className="flex overflow-hidden">
                  {headerItem.label && (
                    <span className="whitespace-nowrap mr-2">
                      {headerItem.label}
                    </span>
                  )}

                  <Image
                    src="/images/chevrons-up-down.svg"
                    width={16}
                    height={16}
                    alt="sort icon"
                  />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              className="w-full border-t border-slate-300 font-normal"
              key={item.id}
            >
              {headerList.map((name) => (
                <td
                  className="text-left px-4 py-2 overflow-hidden truncate"
                  key={name + item.id}
                >
                  {item[name]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full px-3 py-2 flex items-center justify-between border-t border-slate-300">
        <div className="flex items-center gap-2">
          <Image
            src="/images/info.svg"
            width={20}
            height={20}
            alt="info icon"
          />
          <span className="text-slate-600 font-semibold">
            Only {data.length} rows are shown. View full list for more
          </span>
        </div>
        <Image
          src="/images/close.svg"
          width={20}
          height={20}
          alt="close icon"
        />
      </div>
      <div className="p-3 flex w-full gap-4 border-t border-slate-300 bg-white">
        {tableButtons.map((button) => (
          <CustomButton key={button.id} handleClick={button.handleClick}>
            {button.name}
          </CustomButton>
        ))}
      </div>
    </div>
  );
}
