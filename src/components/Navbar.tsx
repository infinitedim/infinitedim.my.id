/* eslint-disable no-unused-vars */

"use client";

import { CommandIcon, Heading, MenuIcon } from "@/components/atoms";
import { menuItem } from "@/constants";
import { Navbar } from "flowbite-react";
import "@total-typescript/ts-reset";

const NavbarApp = () => {
  return (
    <Navbar
      rounded
      className="max-w-5xl p-5 container top-0 inset-x-0 mx-auto fixed bg-custom-white-900"
    >
      <Navbar.Brand href="/">
        <CommandIcon className="h-6 w-6" />
        <Heading className="self-center whitespace-nowrap text-2xl md:text-3xl font-bold">
          Dimas Saputra
        </Heading>
      </Navbar.Brand>
      <Navbar.Toggle
        barIcon={MenuIcon}
        className="focus:ring-0 focus:outline-none h-6 w-6"
      />
      <Navbar.Collapse className="transition-all duration-300 ease-in-out">
        {menuItem.map((item) => (
          <Navbar.Link
            key={Math.floor(Math.random() * 62819304382729)}
            href={`/${item.anchor}`}
          >
            {item.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarApp;
