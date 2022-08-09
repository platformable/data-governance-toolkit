import Head from "next/head";
import Image from "next/image";
import heroIcons from "../public/home-img/hero-icons.svg";
import icon01Section01 from "../public/home-img/icon-01-section-01.svg";
import icon02Section01 from "../public/home-img/icon-02-section-01.svg";
import icon03Section01 from "../public/home-img/icon-03-section-01.svg";
import icon04Section01 from "../public/home-img/icon-04-section-01.svg";
import icon05Section01 from "../public/home-img/icon-05-section-01.svg";
import iconCommunityOrg from "../public/home-img/icon-community-organisation.svg";
import iconPlatformableProcesses from "../public/home-img/icon-platformable-processes.svg";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen  top-0">
        <Head>
          <title>Data Governance Toolkit</title>
          <meta
            content="description"
            name="The Data Governance Toolkit is an online platform
              that helps community based better manage and coordinate
              all of their data activities and data management in one place"
          />
          <link rel="icon" href="/platformable-icon-logo.svg" />
        </Head>
        <div className="bg-image-section">
          <section className=" container flex flex-col px-8 pt-28 pb-7 sm:h-screen md:grid  md:pt-18  grid-cols-2 grid-rows-7 gap-9 sm:gap-2">
            <h1 className="col-start-2  row-start-2 self-center">
              Data that works for you
            </h1>
            <h2 className="col-start-2 sm:w-4/5 row-start-3 self-start">
              Data systems for community health and non-profit-organizations
            </h2>
            <div className="col-start-2 row-start-4 self-start">
              <Image
                src={heroIcons}
                width={700}
                height={150}
                alt="hero-icons"
              ></Image>
            </div>

            <p className="col-start-2 row-start-5 text-xl">
              The <strong>Data Governance Toolkit</strong> is an online platform
              that helps community based organizations better manage and
              coordinate all of their data activities and data management in one
              place
            </p>
            <div className="col-start-2 row-start-6 md:place-self-start md:justify-self-center md:w-full md:flex grid grid-cols-2 gap-3">
              <button className="md:w-5/12 rounded-md sm:min-h-10 bg-blue-900 px-3 py-1 mr-6 text-white font-semibold tracking-wide">
                Demo our product
              </button>
              <button className="md:w-5/12 rounded-md sm:min-h-10 bg-yellow-500 px-3 py-1  font-semibold tracking-wide ">
                Contact us
              </button>
            </div>
          </section>
        </div>

        <section className="flex flex-col container mx-auto px-5 md:px-0 my-20  items-center ">
          <h3 className="text-left md:self-start">
            Data collected through your activities has the power to transform
            your organization and lead to:
          </h3>

          <ul className="flex flex-col md:grid md:grid-cols-2  lg:grid-cols-5  md:gap-10 font-bold my-5">
            <li className=" h-64  shadow-xl rounded-xl p-4 px-7 my-6 block text-center lg:h-80">
              <figure className="mt-5">
                <Image
                  src={icon01Section01}
                  width={100}
                  height={100}
                  alt="service delivery"
                ></Image>

                <figcaption className="mt-7">
                  More effective service delivery
                </figcaption>
              </figure>
            </li>
            <li className=" h-64 shadow-xl rounded-xl p-4 px-7 my-6 block text-center lg:h-80">
              <figure className="mt-5">
                <Image
                  src={icon02Section01}
                  width={100}
                  height={100}
                  alt="easier reporting"
                ></Image>
                <figcaption className="mt-7">
                  Easier reporting to boards and funders
                </figcaption>
              </figure>
            </li>
            <li className=" h-64 shadow-xl rounded-xl p-4 px-7 my-6 block text-center lg:h-80">
              <figure className="mt-5">
                <Image
                  src={icon03Section01}
                  width={100}
                  height={100}
                  alt="share with community"
                ></Image>
                <figcaption className="mt-7">
                  Demonstrated impact to share with your community
                </figcaption>
              </figure>
            </li>
            <li className="h-64 shadow-xl rounded-xl p-4 px-7 my-6 block text-center lg:h-80 ">
              <figure className="mt-5">
                <Image
                  src={icon04Section01}
                  width={100}
                  height={100}
                  alt="evidence-based investmenst and program decisions"
                ></Image>
                <figcaption className="mt-7">
                  Making evidence-based investments and program decisions
                </figcaption>
              </figure>
            </li>
            <li className=" h-64 shadow-xl rounded-xl p-4 px-7 my-6 block text-center lg:h-80">
              <figure className="mt-5">
                <Image
                  src={icon05Section01}
                  width={100}
                  height={100}
                  alt="transparency and accountability"
                ></Image>
                <figcaption className="mt-7">
                  Better participation through transparency and accountability
                </figcaption>
              </figure>
            </li>
          </ul>
        </section>
        <section className="min-vh-150 px-3 md:px-20 flex flex-col justify-around text-center bg-main-color-gradient">
          <h3 className="container mx-auto font-semibold py-4 md:mb-7 tracking-wide mt-10 md:h-1/5">
            The <strong>Data Governance Toolkit</strong> platform helps you
            ensure that you have the policies, processes and datasets collected
            in one place to help you manage your data
          </h3>
          <ul className="container mx-auto flex flex-col text-left   mt-10 md:mt-0 md:text-lg md:grid md:grid-cols-2 xl:w-full xl:flex xl:flex-row md:h-2/5 justify-between">
            <li className="font-bold text-xl  px-6 flex">
              <p className="mr-4">&#10004;</p> Practical
            </li>
            <li className="font-bold text-xl  px-6 flex">
              <p className="mr-4">&#10004;</p> Ethical
            </li>
            <li className="font-bold text-xl  px-6 flex">
              <p className="mr-4">&#10004;</p>
              Privacy-focused
            </li>
            <li className="font-bold text-xl  px-6 flex">
              <p className="mr-4">&#10004;</p>
              Regulatory compliant
            </li>

            <li className="font-bold text-xl  px-6 flex">
              <p className="mr-4">&#10004;</p> Responsible
            </li>
            <li className="font-bold text-xl  px-6 flex">
              <p className="mr-4">&#10004;</p> Equitable
            </li>
            <li className="font-bold text-xl  px-6 flex">
              <p className="mr-4">&#10004;</p> Secure
            </li>
          </ul>

          <div className="grid  md:grid-cols-2 gap-7 mt-20 py-16 md:gap-9 self-center justify-items-center  md:h-2/5 md:justify-evenly ">
            <h3 className="text-3xl font-bold  self-center md:col-span-full">
              Learn more
            </h3>

            <Link href="/communityOrganizations">
              <div className="w-48 bg-main-color cursor-pointer rounded-lg border-solid border-2 border-yellow-400 p-5 md:row-start-2">
                <Image
                  src={iconCommunityOrg}
                  width={130}
                  height={150}
                  alt="evidence-based investmenst and program decisions"
                ></Image>
                <p className="text-2xl font-bold ">
                  Community <br /> Organization
                </p>
              </div>
            </Link>

            <Link href="/dataGovernanceProcesses">
              <div className="w-48 bg-main-color cursor-pointer rounded-lg border-solid border-2 border-yellow-400 p-5 md:row-start-2">
                <Image
                  src={iconPlatformableProcesses}
                  width={130}
                  height={150}
                  alt="evidence-based investmenst and program decisions"
                ></Image>
                <p className="text-2xl font-bold ">
                  Platformable <br /> Processes
                </p>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
