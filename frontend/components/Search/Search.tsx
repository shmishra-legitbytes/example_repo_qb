import { Button, ButtonGroup } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
export function Search() {
  return (
    <form className="flex flex-col justify-center items-center gap-y-3 scale-90">
      <div className="w-full bg-white rounded-xl p-1 overflow-hidden flex">
        <Input
          type="text"
          placeholder="Enter tags, subject, etc"
          startContent={<CiSearch />}
          radius="none"
        />
        <Button type="submit">Search</Button>
      </div>
      <div>
        <Button type="button" as={Link} href="/advance-search" variant="solid">
          Advance Search
        </Button>
      </div>
    </form>
  );
}
