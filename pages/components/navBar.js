import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function NavBar() {
  // Top Navigation Bar Element
  return (

    <header className="bg-gray-700 sticky top-0 z-50">
      <div className="px-6 mx-auto max-w-screen-xl sm:px-6 lg:px-8 items-center">

        <div className="flex items-center justify-between h-16">
          <div className="flex-1 md:flex md:items-center md:gap-12">

          <Link href="/">
            <Image 
              src="inheri-logo.svg"
              alt="logo"
              width={150}
              height={150}
            />
          </Link>

          </div>

          <div className="flex text-sm items-center gap-6 justify-start pl-4">
            <Link href="writer_page">
              <p className="text-white transition hover:text-white/75">
                Writer
              </p>
            </Link>
            <Link href="oracle_page">
              <p className="text-white transition hover:text-white/75">
                Oracle
              </p>
            </Link>
            <Link href="reader_page">
              <p className="text-white transition hover:text-white/75">
                Reader
              </p>
            </Link>
            <Link href="verify_page">
              <p className="text-white transition hover:text-white/75">
                Verify Claims
              </p>
            </Link>
          </div>


        </div>
      </div>
    </header>
  )
}
