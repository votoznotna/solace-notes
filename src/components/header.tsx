import Link from "next/link";

import { Suspense } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { Tooltip } from "@nextui-org/react";
import { IoCreateOutline } from "react-icons/io5";
import SearchInput from "@/components/search";

export default function Header() {
  return (
    <Navbar className="shadow mb-6 mr-0">
      <NavbarBrand className="text-2xl">
        <Link href="/" className="font-bold">
          Notes
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Link
          href="/notes/new"
          className="p-2 rounded"
          aria-label="Go to Note Create Page"
        >
          <Tooltip content="Create Note">
            <IoCreateOutline size={25} />
          </Tooltip>
        </Link>
      </NavbarContent>
    </Navbar>
  );
}
