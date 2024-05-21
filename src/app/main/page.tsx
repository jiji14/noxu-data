"use client";

import ChatBox from "@/components/ChatBox";
import CustomButton from "@/components/CustomButton";
import DataTable from "@/components/DataTable";
import {
  suggestList,
  tableButtons,
  tableData,
  tableHeader,
} from "@/utils/dummyData";
import Image from "next/image";

export default function Main() {
  return (
    <div className="flex flex-col text-slate-900 text-base">
      <div className="flex justify-center items-center p-8">
        <div className="w-[800px] flex gap-4 items-center ">
          <Image
            src="/images/avatar.svg"
            width={40}
            height={40}
            alt="user icon"
          />
          <div>List my top 10 accounts</div>
        </div>
      </div>
      <div className="flex justify-center items-center p-8 bg-slate-100">
        <div className="w-[800px]">
          <div className="w-fit mb-2 text-customOrange font-semibold flex bg-white border border-solid border-1 border-slate-300 rounded-md">
            <div className="flex items-center gap-1 py-2 px-3 border-r border-r-1 border-slate-300">
              <Image
                src="/images/alert-circle.svg"
                width={20}
                height={20}
                alt="alert icon"
              />
              <span>Not Confident</span>
            </div>
            <div className="flex items-center gap-1 py-2 px-3">
              <span>Human Help</span>
              <Image
                src="/images/arrow-right.svg"
                width={20}
                height={20}
                alt="arrow icon"
              />
            </div>
          </div>
          <div>
            <div className="flex gap-4 items-center gap-2 mb-2">
              <Image
                src="/images/logo_mark.svg"
                width={40}
                height={40}
                alt="logo"
              />
              <p>
                To find out how many accounts you have, you can use the
                following query:
              </p>
            </div>
            <div className="ml-14">
              <DataTable
                header={tableHeader}
                data={tableData}
                tableButtons={tableButtons}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 px-8 py-4">
        <div className="w-[800px] flex gap-4">
          {suggestList.map((suggest) => (
            <CustomButton key={suggest.id} handleClick={suggest.handleClick}>
              {suggest.name}
            </CustomButton>
          ))}
        </div>
        <ChatBox />
      </div>
    </div>
  );
}
