"use client";

import { Input } from "@nextui-org/react";
import { useSearchParams, usePathname } from "next/navigation";
import * as actions from "@/actions";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  if (!["/", "/search"].includes(pathname)) return null;
  return (
    <>
      <form
        action={actions.search}
        className="relative flex justify-between items-center"
      >
        <Input
          placeholder="Search"
          name="search"
          defaultValue={searchParams.get("filter") || ""}
          isClearable
          onClear={() => actions.resetSearch(new FormData())}
          startContent={<IoSearchOutline />}
        />
      </form>
    </>
  );
}
