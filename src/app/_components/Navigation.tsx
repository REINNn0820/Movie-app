import { Film } from "lucide-react";
import { Search } from "@/app/_components/Search";
import { Moon } from "@/app/_components/Moon";
import { MoonType } from "@/app/layout";
import { FilterGenre } from "./FilterGenre";
import Link from "next/link";
import { SearchMainPage } from "./SearchMainPage";

export const Navigation = ({
  toggleTheme,
  theme,
}: {
  toggleTheme: () => void;
  theme: MoonType;
}) => {
  return (
    <div className="w-[100%] flex gap-2 px-5 py-[11.5px]">
      <div className="w-[100%] flex items-center justify-between">
        <h1 className="flex gap-2 italic font-bold text-[16px] text-[#4338CA] min-w-10">
          <Film />
          <Link href={"http://192.168.1.14:3000"}><span>Movie Z</span></Link>
        </h1>
        <FilterGenre />
        <div className="flex gap-3 ">
          {/* <button className="border rounded-[10px] p-2">
            <Search theme={theme} />
          </button> */}
          <div className="relative"><SearchMainPage/></div>
          <button className="border rounded-[10px] p-2" onClick={toggleTheme}>
            <Moon theme={theme} />
          </button>
        </div>
      </div>
    </div>
  );
};
