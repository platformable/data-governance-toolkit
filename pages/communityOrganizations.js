import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";

import ensureIcon from "../public/community-org-img/ensure-icon.svg";
import advocateIcon from "../public/community-org-img/advocate-icon.svg";
import generateIcon from "../public/community-org-img/generate-icon.svg";
import improveIcon from "../public/community-org-img/improve-icon.svg";

import keyFeatures01 from "../public/community-org-img/key-features-01.svg";
import keyFeatures02 from "../public/community-org-img/key-features-02.svg";
import keyFeatures03 from "../public/community-org-img/key-features-03.svg";
import keyFeatures04 from "../public/community-org-img/key-features-04.svg";
import keyFeatures05 from "../public/community-org-img/key-features-05.svg";
import keyFeatures06 from "../public/community-org-img/key-features-06.png";
import keyFeatures07 from "../public/community-org-img/key-features-07.svg";
import keyFeatures08 from "../public/community-org-img/key-features-08.png";
import outcomes01 from "../public/community-org-img/outcomes-01.svg";
import outcomes02 from "../public/community-org-img/outcomes-02.svg";
import outcomes03 from "../public/community-org-img/outcomes-03.svg";

export default function CommunityOrganizations() {
  return (
    <>
      <Layout>
        <main className="py-24 top-0 md:pt-18 bg-main-color-gradient flex flex-col items-center">
          <Head>
            <title>Community Organizations</title>
            <meta
              content="description"
              name="The Data Governance Toolkit is an online platform
                that helps community based better manage and coordinate
                all of their data activities and data management in one place"
            />
            <link rel="icon" href="/platformable-icon-logo.svg" />
          </Head>
          <section className="container mx-auto px-5 md:px-0">
            <article className="w-full flex flex-col items/center md:items-start">
              <h2 className="mt-14 mb-10 tracking-wide text-center md:self-start">
                Data governance for community organizations
              </h2>
              <div className="h-6/12 font-bold text-2xl text-center my-10 border-solid border-2 rounded-xl border-yellow-400 px-7 p-5">
                Data is a necessary asset for community-based organizations when
                working to meet your goals and reduce societal inequalities
              </div>
              <ul className="flex flex-col md:w-full  my-10 md:grid md:grid-cols-4 md:gap-3">
                <li className="h-72 leading-relaxed   p-4 my-6 block text-center">
                  <Image
                    src={ensureIcon}
                    width={150}
                    height={160}
                    alt=""
                  ></Image>
                  <h3>Ensure</h3>
                  <p className="text-xl">data quality</p>
                </li>
                <li className="  h-72 leading-relaxed   p-4 my-6 block text-center">
                  <Image
                    src={improveIcon}
                    width={150}
                    height={160}
                    alt=""
                  ></Image>

                  <h3>Improve</h3>
                  <p className="text-xl">service delivery</p>
                </li>
                <li className="  h-72  leading-relaxed   p-4 my-6 block text-center">
                  <Image
                    src={advocateIcon}
                    width={150}
                    height={160}
                    alt=""
                  ></Image>

                  <h3>Advocate</h3>
                  <p className="text-xl">more effectively</p>
                </li>
                <li className=" h-72 leading-relaxed   p-4 my-6 block text-center">
                  <Image
                    src={generateIcon}
                    width={150}
                    height={160}
                    alt=""
                  ></Image>

                  <h3>Generate</h3>
                  <p className="text-xl">new funding</p>
                </li>
              </ul>
            </article>

            <article className="lg:h-full">
              <h2 className="my-16 trackin-wide text-center md:text-left">
                The Data Governance Toolkit platform
              </h2>
              <p className="my-16 text-2xl ">
                Our data governance toolkit has been used by large community
                health organizations across the United States and smaller
                agencies looking to improve data collection and reporting for a
                single program
              </p>
              <div className="mt-16 mb-20 text-2xl font-bold  rounded-xl text-center border-solid border-2 border-yellow-400 p-5  leading-snug">
                <strong>Platformable`s Data Governance Toolkit</strong> helps
                agencies use best practices in <br />
                data governance and can be customized to specific funding goals
                by addressing keydata governance components in a stepwise manner
              </div>
            </article>
          </section>
          <section className="bg-main-color-gradient w-full">
            <div className="container mx-auto">
              <article className="mt-10 text-center">
                <h2 className="py-7 tracking-wide">Key features</h2>
                <ul className="text-center text-lg font-semibold tracking-wide md:grid md:grid-cols-2 xl:grid-cols-4 gap-10">
                  <li className="pt-11 md:pt-7 pb-7">
                    <figure>
                      <Image
                        src={keyFeatures01}
                        width={130}
                        height={145}
                        alt="Uses widely- used and often free tools"
                      ></Image>

                      <figcaption>
                        Uses widely-used
                        <br /> and often free tools
                      </figcaption>
                    </figure>
                  </li>
                  <li className="p-7">
                    <figure>
                      <Image
                        src={keyFeatures02}
                        width={130}
                        height={145}
                        alt="Fully customizable according to your data collection needs​​"
                      ></Image>

                      <figcaption>
                        Fully customizable according to your data collection
                        needs​​
                      </figcaption>
                    </figure>
                  </li>
                  <li className="p-7">
                    <figure>
                      <Image
                        src={keyFeatures03}
                        width={130}
                        height={145}
                        alt="Integrates with your existing data collection systems and IT tools"
                      ></Image>

                      <figcaption>
                        Integrates with your existing data collection systems
                        and IT tools
                      </figcaption>
                    </figure>
                  </li>
                  <li className="p-7">
                    <figure>
                      <Image
                        src={keyFeatures04}
                        width={130}
                        height={145}
                        alt="Adaptable as you grow and learn"
                      ></Image>

                      <figcaption>Adaptable as you grow and learn</figcaption>
                    </figure>
                  </li>
                  <li className="p-7">
                    <figure>
                      <Image
                        src={keyFeatures05}
                        width={130}
                        height={145}
                        alt="Secure and safe"
                      ></Image>

                      <figcaption>Secure and safe</figcaption>
                    </figure>
                  </li>
                  <li className="p-7 flex items-center ">
                    <figure className="self-end lg:self-auto">
                      <Image
                        src={keyFeatures06}
                        alt="GDPR and CPAA and data privacy compliant"
                      ></Image>

                      <figcaption className="pt-7">
                        GDPR and CPAA and data privacy compliant
                      </figcaption>
                    </figure>
                  </li>
                  <li className="p-7">
                    <figure>
                      <Image
                        src={keyFeatures07}
                        width={130}
                        height={145}
                        alt="Real-time data management to instantly see the impacts of your work"
                      ></Image>

                      <figcaption>
                        Real-time data management to instantly see the impacts
                        of your work
                      </figcaption>
                    </figure>
                  </li>
                  <li className="p-7">
                    <figure>
                      <Image
                        src={keyFeatures08}
                        width={130}
                        height={145}
                        alt="Able to connect to other data sets to measure impact on long term outcomes over time"
                      ></Image>

                      <figcaption>
                        Able to connect to other data sets to measure impact on
                        long term outcomes over time
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </article>
              <article className=" mt-7 flex flex-col items-center font-bold">
                <h2 className="py-7 tracking-wide">Outcomes</h2>
                <div className="w-10/12 flex flex-col items-center lg:flex-row lg:w-full md:justify-around text-center">
                  <figure className="circular-container  md:p-4 md:mx-5 ">
                    <Image
                      src={outcomes01}
                      width={150}
                      height={150}
                      alt="reuce time spent"
                    ></Image>
                    <figcaption>
                      Reduce time spent cleaning and preparing data for reports
                    </figcaption>
                  </figure>
                  <figure className="circular-container md:p-4 md:mx-5">
                    <Image
                      src={outcomes02}
                      width={150}
                      height={150}
                      alt="increase funding"
                    ></Image>
                    <figcaption>
                      Increase funding through effective use of data to
                      demostrate your impact
                    </figcaption>
                  </figure>
                  <figure className="circular-container md:p-4 md:mx-5">
                    <Image
                      src={outcomes03}
                      width={150}
                      height={150}
                      alt="evidence based on key isuess"
                    ></Image>
                    <figcaption>
                      Evidence-based advocacy on key issues facing your
                      community
                    </figcaption>
                  </figure>
                </div>
              </article>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
