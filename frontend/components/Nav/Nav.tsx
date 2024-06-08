"use client";
import React from "react";
import { NavbarTheme } from "@/config/NavbarTheme";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button, ButtonGroup } from "@nextui-org/button";
import clsx from "clsx";
import { usePathname } from "next/navigation";

//Temporary array for rendering navlinks
const navlinks = ["Home", "Questions", "Create Content", "Tutoring"];

//Navigation Bar
export function Nav(): React.JSX.Element {
  return (
    <div>
      <Navbar className="" shouldHideOnScroll={true}>
        <NavbarContent>
          <NavbarBrand className="flex flex-col justify-start text-start">
            <p className="font-bold tracking-wide text-lg ">Question Bucket</p>
            <p className="font-bold text-xs tracking-wide">Sharing Knowledge</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent>
          <ButtonGroup className="bg-[#DDDDDD] rounded-full p-1">
            {navlinks.map((link) => (
              <NavbarItem key={link}>
                <Button
                  as={Link}
                  href={link === "Home" ? "/" : link.toLowerCase()}
                  radius="full"
                  size="sm"
                  variant="light"
                >
                  {link}
                </Button>
              </NavbarItem>
            ))}
          </ButtonGroup>
        </NavbarContent>
        <NavbarContent>
          <NavbarItem>
            <Button as={Link} href="/login" variant="ghost">
              Login
            </Button>
          </NavbarItem>

          <NavbarItem>
            <Button as={Link} href="/register" className={`text-white`}>
              Register
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
