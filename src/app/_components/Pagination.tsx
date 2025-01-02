"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { PageInfo } from "../constants/types";

type Props = {
  pageInfo: PageInfo;
};

const getVisiblePages = (currentPage: number) => {
  if (currentPage < 3) {
    return [1, 2, 3, 4, 5];
  }
  return [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
  ];
};
export const PaginationConstrols = ({ pageInfo }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams.get("page") || 1;

  let newArray = [];
  for (let i = Number(page) + 1; i < Number(page) + 10; i++) {
    newArray.push(i);
  }
  const onChange = (newPage: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", newPage.toString());
    const newUrl = pathname + "?" + newSearchParams.toString();
    router.push(newUrl);
  };

  const lastPage = pageInfo.totalPages > 500 ? 500 : pageInfo.totalPages;
  const visiblePages = getVisiblePages(pageInfo.currentPage);
  return (
    <div className="flex gap-10 mx-10 cursor-pointer">
      {pageInfo.currentPage > 1 && (
        <div onClick={() => onChange(pageInfo.currentPage - 1)}>Prev</div>
      )}
      {visiblePages.map((page) => (
        <div
          onClick={() => onChange(page)}
          className={pageInfo.currentPage === page ? "font-semibold" : ""}
          key={page}
        >
          {" "}
          {page}
        </div>
      ))}
      <div onClick={() => onChange(lastPage)}> {lastPage}</div>
      {pageInfo.currentPage < lastPage && (
        <div onClick={() => onChange(pageInfo.currentPage + 1)}>Next</div>
      )}
    </div>
  );
};
