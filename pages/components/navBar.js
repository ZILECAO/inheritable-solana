import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function NavBar() {
  // Top Navigation Bar Element
  return (
      <header aria-label="Site Header" className="bg-bb">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                  <Link href="/">
                    <Image
                        src="/newlogo.png"
                        alt="logo"
                        width={150}
                        height={150}
                    />
                  </Link>
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Site Nav">
                <ul className="flex items-center gap-6 text-sm text-white text-4xl font-serif">
                  <li>
                    <a
                        className="transition hover:text-gray-500/75 "
                        href="/"
                    >
                      Dashboard
                    </a>
                  </li>

                  <li>
                    <a
                        className="transition hover:text-gray-500/75 italic"
                        href="/"
                    >
                      Estate User
                    </a>
                  </li>

                  <li>
                    <a
                        className="transition hover:text-gray-500/75"
                        href="/"
                    >
                      Witness
                    </a>
                  </li>

                  <li>
                    <a
                        className="transition hover:text-gray-500/75"
                        href="/"
                    >
                      Inheritor
                    </a>
                  </li>

                  <li>
                    <a
                        className="transition hover:text-gray-500/75"
                        href="/"
                    >
                      Verify Claim
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

          </div>
        </div>
      </header>


  )
}
