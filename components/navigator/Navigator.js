import Link from "next/link";
import styles from "../../styles/Navigator.module.css";
import iconLogo from "../../public/platformable-icon-logo.svg";
import Image from "next/image";

export default function Navigator() {
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
          <li className="p-3">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="p-3">
            <Link href="/communityOrganizations">
              <a>Community Organizations</a>
            </Link>
          </li>
          <li className="p-3">
            <Link href="/dataGovernanceProcesses">
              <a>Our Data Governance processes</a>
            </Link>
          </li>
          <li className="p-3">
            <Link href="">
              <a>About Us</a>
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="w-full h-2/5 block sm:hidden p-5 bg-transparent rounded-sm absolute">
        <ul className="flex justify-between ">
          <Image
            src={iconLogo}
            width={50}
            height={50}
            alt="platformable-logo"
          ></Image>
          <li>Options</li>
        </ul>
      </nav>
    </header>
  );
}
