"use client";

import { ChangeEvent, useState } from "react";

export const SearchMainPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return <div></div>;
};
