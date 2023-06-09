import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  // Top Navigation Bar Element
  const [stage, setStage] = useState(0);
  return (
    <header aria-label="Site Header" className="bg-bb sticky top-0 z-50">
      <div className="mx-auto sm:px-12 lg:px-24">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <span className="sr-only">Home</span>
            <Link href="/">
              <Image
                src="/pen.svg"
                alt="logo"
                width={40}
                height={40}
              />
            </Link>
          </div>


          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 text-md text-white font-serif">

              <li>
                  <Link
                    className="transition hover:text-gray-500/75 italic"
                    href="/index"
                  >
                    Dashboard
                  </Link>
                </li>

                <li>
                  <Link
                    className="transition hover:text-gray-500/75"
                    href="/writer_page"
                  >
                    Estate Write
                  </Link>
                </li>

                <li>
                  <Link
                    className="transition hover:text-gray-500/75"
                    href="/oracle_page"
                  >
                    Oracle Vote
                  </Link>
                </li>

                <li>
                  <Link
                    className="transition hover:text-gray-500/75"
                    href="/reader_page"
                  >
                    Check Claim
                  </Link>
                </li>

                <li>
                  <Link
                    className="transition hover:text-gray-500/75 italic"
                    href="/verify_page"
                  >
                    Verify Claims
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>


  )
}
export default NavBar