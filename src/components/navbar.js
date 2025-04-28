"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { Smartphone } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-10 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Smartphone className="h-7 w-7 text-violet-600" />
          <span className="text-xl font-bold text-neutral-600">
            App<span className="text-violet-600">Nest</span>
          </span>
        </div>

        <nav className="hidden md:flex gap-6">
          {/* Your nav links */}
          {[
            { href: "#features", label: "Features" },
            { href: "#how-it-works", label: "How It Works" },
            { href: "#testimonials", label: "Testimonials" },
            { href: "#pricing", label: "Pricing" },
            { href: "#faq", label: "FAQ" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium transition-colors hover:text-violet-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="hidden md:flex cursor-pointer px-5 py-2 hover:bg-gray-100 text-base"
          >
            Log in
          </Button>
          <Button
            size="sm"
            className="hidden md:flex bg-violet-600 hover:bg-violet-700 text-base py-2 text-white cursor-pointer"
          >
            Download
          </Button>

          {/* Mobile Menu Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {/* Mobile Menu - Slide in/out */}
      <div
        className={`fixed top-16 left-0 w-full bg-white border-b z-40 transition-all duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4 p-6">
          {[
            { href: "#features", label: "Features" },
            { href: "#how-it-works", label: "How It Works" },
            { href: "#testimonials", label: "Testimonials" },
            { href: "#pricing", label: "Pricing" },
            { href: "#faq", label: "FAQ" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)} // Close menu after clicking
              className="text-base font-medium transition-colors hover:text-violet-600"
            >
              {item.label}
            </Link>
          ))}

          <div className="flex flex-col gap-2 pt-4">
            <Button
              variant="ghost"
              className="w-full cursor-pointer bg-gray-100 hover:bg-gray-200 text-base"
            >
              Log in
            </Button>
            <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white text-base">
              Download
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
