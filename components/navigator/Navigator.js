import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Navigator.module.css";
import iconLogo from "../../public/platformable-icon-logo.svg";
import Image from "next/image";

export default function Navigator() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <nav className="p-5 hidden sm:block  absolute w-full  bg-transparent">
        <ul className="flex justify-between">
          <Image
            src={iconLogo}
            width={50}
            height={50}
            alt="platformable-logo"
          ></Image>
          <li className="p-3 cursor-pointer">
            <Link href="/">
              <a className="font-bold trackin-wide">Home</a>
            </Link>
          </li>
          <li className="p-3 cursor-pointer ">
            <Link href="/communityOrganizations">
              <a className="font-bold trackin-wide">Community Organizations</a>
            </Link>
          </li>
          <li className="p-3 cursor-pointer ">
            <Link href="/dataGovernanceProcesses">
              <a className="font-bold trackin-wide">
                Our Data Governance processes
              </a>
            </Link>
          </li>
          <li className="p-3 cursor-pointer ">
            <Link href="https://platformable.com/about">
              <a className="font-bold trackin-wide">About Us</a>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="w-full h-2/5 block sm:hidden p-5 bg-transparent rounded-sm absolute">
        <div className="flex justify-between pr-2">
          <Image
            src={iconLogo}
            width={50}
            height={50}
            alt="platformable-logo"
          ></Image>
          <svg
            width="34"
            height="34"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setShowMenu(!showMenu)}
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </nav>

      <div
        className={`md:hidden absolute  text-right text-lg w-full px-5 py-3 mt-16 bg-yellow-500 transition-transform  transform ${
          !showMenu ? "-left-full" : "-translate-x-0"
        } `}
      >
        <ul>
          <Link href="/">
            <li className="underline font-semibold hover:text-white">Home</li>
          </Link>
          <Link href="/communityOrganizations">
            <li className="underline font-semibold hover:text-white">
              Community Organizations
            </li>
          </Link>
          <Link href="/dataGovernanceProcesses">
            <li className="underline font-semibold hover:text-white">
              Our Data Governance Processes
            </li>
          </Link>
          <Link href="https://platformable.com/about">
            <li className="underline font-semibold hover:text-white">
              About Us
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
