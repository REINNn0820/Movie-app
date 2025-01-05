"use client";

import { ChangeEvent, useState } from "react";
import { SearchInput } from "./SearchInput";
import { SearchResultList } from "./SearchResultList";

export const SearchMainPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return <div>
    <div>
      <SearchInput handleChange={handleChange} value={searchValue}/>
      {searchValue && <SearchResultList searchValue={searchValue}/>}
    </div>
  </div>;
};
