"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "public/logo.svg";
import { cx } from "lib/cx";
import { LogInButton } from "components/LogInButton";
import { SignUpButton } from "components/SignUpButton";
import React from "react";

export const TopNavBar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[70px] items-center border-b-2 border-gray-100 px-3 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex h-full w-full items-center justify-between">
        <Link href="/">
          <span className="sr-only">Skills AI </span>
          <Image
            src={logoSrc}
            alt="OpenResume Logo"
            className="h-12 w-full"
            priority
          />
          <span
            className="text-sm ml-2 font-bold"
            style={{ maxWidth: "6ch", fontSize: "1rem" }}
          >
            <b>KPCC</b>
          </span>
        </Link>
        <nav
          aria-label="Site Nav Bar"
          className="flex items-center gap-2 text-sm font-medium"
        >
          <div className="flex items-center gap-2">
            {[
              ["/resume-builder", "Resume Builder"],
              ["/resume-parser", "Resume Parser"],
              ["", ""],
              ["", ""],
            ].map(([href, text], index) => (
              <React.Fragment key={index}>
                {index < 2 ? (
                  <Link
                    className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
                    href={href}
                  >
                    {text}
                  </Link>
                ) : index === 2 ? (
                  <LogInButton />
                ) : (
                  <SignUpButton />
                )}
              </React.Fragment>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};