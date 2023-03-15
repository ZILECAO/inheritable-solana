import { useState } from "react";
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <section className="bg-zinc-900 min-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div
            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
          >
            <Image className="pl-24"
              src="judge.svg"
              alt="image"
              width={500}
              height={500}
            />
          </div>

          <div className="">

            <Image className="pb-6"
              src="/newlogo.svg"
              alt="logo"
              width={400}
              height={400}
            />

            <div className="ml-4">
              <h2 className="mt-2 mb-1 text-xl font-bold font-DMSans text-gray-300 sm:text-4xl">Web3 Wills for Secure, Decentralized Inheritance</h2>

              <span className='flex flex-nowrap items-center place pt-4 pb-4 font-DMSerif'>
                <span className='text-gray-500 text-xl font-small sm:text-2xl pr-1'>Anchored on</span>
                <Image className='mx-2'
                  src="solana.svg"
                  alt="image"
                  width={40}
                  height={40}
                />

                <span className='text-gray-500 text-xl font-small sm:text-2xl pl-2 p-3'> | </span>

                <span className='flex flex-nowrap items-center place '>
                  <span className='text-gray-500 text-xl font-small sm:text-2xl'>Powered by</span>
                  <Image className='mx-2'
                    src="logo2.svg"
                    alt="image"
                    width={150}
                    height={150}
                  />


                </span>

              </span>

              <a
                href="/writer_page"
                className="mt-2 inline-flex items-center rounded border border-zinc-900 bg-bb px-8 py-3 text-white hover:bg-zinc-700 focus:outline-none focus:ring hover:ease-in-out hover:transition hover:duration-700"
              >
                <span className="text-sm font-bold font-DMSans"> Write Your First Will </span>

                <svg
                  className="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

            </div>




          </div>
        </div>


      </div>
    </section>

  )
}