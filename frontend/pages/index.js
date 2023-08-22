import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { DynamicContextProvider, DynamicWidget } from "@dynamic-labs/sdk-react";

export default function Home() {
  return (
    <section className="text-center mx-auto max-w-screen min-h-screen mt-[10vh]">
      <div className="flex flex-col justify-center items-center h-screen sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20">
        {/* <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 pb-24"> */}
        {/* <div className="relative overflow-hidden rounded-lg lg:order-last sm:order-last flex items-center justify-center h-full">
            <Image
              className="pl-24"
              src="judge.svg"
              alt="image"
              width={650}
              height={650}
            />
          </div> */}

        <div className="justify-center">
          <Image
            className="pb-4 justify-center"
            src="/newlogo.svg"
            alt="logo"
            width={500}
            height={500}
          />

          <div className="ml-4">
            <h2 className=" mb-1 text-xl font-bold font-DMSerif text-yellow-100 sm:text-4xl">
              Creating Web3 Wills for Secure, Decentralized Inheritance
            </h2>

            <span className="flex flex-nowrap items-center place pt-4 pb-4 font-DMSerif">
              <span className="text-gray-500 text-xl font-small sm:text-2xl pr-1">
                Anchored on
              </span>
              <Image
                className="mx-2"
                src="solana.svg"
                alt="image"
                width={40}
                height={40}
              />

              <span className="text-gray-500 text-xl font-small sm:text-2xl pl-2 p-3">
                {" "}
                |{" "}
              </span>

              <span className="flex flex-nowrap items-center place ">
                <span className="text-gray-500 text-xl font-small sm:text-2xl">
                  Powered by
                </span>
                <Image
                  className="mx-2"
                  src="logo2.svg"
                  alt="image"
                  width={150}
                  height={150}
                />
              </span>
            </span>

            <span className="flex flex-nowrap items-center place font-DMSerif">
              <a
                href="/writer_page"
                className="mt-2 inline-flex items-center rounded-lg border border-zinc-900 bg-zinc-900 px-10 py-4 text-lg text-white hover:bg-zinc-800 focus:outline-none focus:ring ease-in-out transition duration-700"
              >
                <span className="text-md font-bold font-DMSerif">
                  {" "}
                  Write Your First Will{" "}
                </span>

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
            </span>

            <span className="flex flex-nowrap items-center justify-center place font-DMSerif">
              <div className=" text-zinc-300 font-DMSans rounded mt-48">
                <div className="justify-start flex-nowrap flex items-center pb-1">
                  <div className="items-center font-sm text-md">
                    Smart Contracts deployed on
                  </div>
                  <Image
                    className="mx-2"
                    src="solana.svg"
                    alt="image"
                    width={25}
                    height={25}
                  />
                </div>
                <div className="flex items-center">
                  <a
                    target="_blank"
                    href={
                      "https://explorer.solana.com/address/3uCfjcPxnvWyNRSpBQKcDwpBmuAaXraPw8v7SzKicfmq?cluster=testnet"
                    }
                    className="text-xs font-light underline hover:text-indigo-300 hover:ease-in-out hover:transition hover:duration-700"
                  >
                    Writing Hashes of the Will
                  </a>
                  &nbsp;
                  <a>|</a>
                  &nbsp;
                  <a
                    target="_blank"
                    href={
                      "https://explorer.solana.com/address/G9nmhaToGZr2ih7X24Zo72w6fYLAEYU9EMjSo5M5D3vf?cluster=testnet"
                    }
                    className="text-xs font-light underline hover:text-indigo-300 hover:ease-in-out hover:transition hover:duration-700"
                  >
                    Oracle Signing
                  </a>
                </div>
              </div>
            </span>
          </div>

          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
