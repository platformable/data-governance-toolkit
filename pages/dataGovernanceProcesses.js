import Head from "next/head";
import Image from "next/image";

import dataPolicyImg from "../public/data-governance-processes/Data-Policy.svg";
import dataDictionaryImg from "../public/data-governance-processes/Data-Dictionary.svg";
import workflowAndPersonaMapImg from "../public/data-governance-processes/Workflow-and-Persona-Maps.svg";
import databaseImg from "../public/data-governance-processes/Database.svg";
import dataSetDirectoryImg from "../public/data-governance-processes/Dataset-Directory.svg";
import integrationsImg from "../public/data-governance-processes/Integrations.svg";
import programLogicModelImg from "../public/data-governance-processes/Program-Logic-Model.svg";
import reportsImg from "../public/data-governance-processes/Reports.svg";
import surveysImg from "../public/data-governance-processes/Surveys.svg";
import standarizedDataDictionaryImg from "../public/data-governance-processes/Standarized-in-data-dictionary.svg";
import maintainedInRealTimeImg from "../public/data-governance-processes/Maintained-in-real-time.svg";
import internallyImg from "../public/data-governance-processes/Internally.svg";
import againstWiderCityImg from "../public/data-governance-processes/Against-wider-city.svg";
import Layout from "../components/Layout";

export default function DataGovernanceProcesses() {
  return (
    <>
      <Layout>
        <main className="pt-24 top-0 px-26  md:pt-18 bg-main-color-gradient flex flex-col items-center">
          <Head>
            <title>Our Data Governance Processes</title>
            <meta
              content="description"
              name="The Data Governance Toolkit is an online platform
                that helps community based better manage and coordinate
                all of their data activities and data management in one place"
            />
            <link rel="icon" href="/platformable-icon-logo.svg" />
          </Head>
          <section className="container px-5 md:px-0 md:mx-auto mb-9 md:mb-24">
            <article className="header grid grid-cols-1 gap-14">
              <h2 className="mt-14 mb-5 tracking-wide text-center md:text-left">
                Platformable’s Data Governance Processes
              </h2>
              <p className="text-2xl">
                For community-based organizations, managing data means having
                good data governance processes in place across the data journey
                (from collection, to cleaning and preparing data, to analysis
                and visualization, to reporting and reuse)
              </p>
              <div className="border-2 border-yellow-500 rounded-xl text-2xl font-semibold p-5 px-7 text-center">
                <span className="font-black">
                  Platformable’s Data Governance Toolkit
                </span>{" "}
                helps community organizations to build all core components
                needed to operate a best practice data governance system. This
                can be applied at the whole agency level, or done for each
                program
              </div>
            </article>
          </section>
          <section
            id="components-section-data-processes-page"
            className="w-full"
          >
            <article className="container mx-auto px-5 md:px-0">
              <h2 className="pl-5 pt-16 pb-7 text-center lg:text-left">
                Data Governance components
              </h2>
              <ul className="grid grid-rows-9  md:11/12 lg:w-full md:grid-rows-5 md:grid-cols-2 md:gap-16 lg:gap-5 lg:flex lg:justify-around flex-wrap lg:mx-auto ">
                <li className=" z-10 text-center grid-rows-2 lg:w-56">
                  <div className="w-10/12 h-56 mx-auto mb-0 data-gov-component bg-white font-bold shadow-2xl rounded-2xl p-4 my-6 block text-center">
                    <Image width={80} height={100} src={dataPolicyImg} />
                    <p className="font-bold">Data Policy</p>
                  </div>
                  <div className="h-40 flex flex-col justify-content-center text-center italic lg:text-md px-6 dialog-section bg-main-color bg-blue-300 font-semibold border-2 border-white rounded-2xl">
                    How do we manage data ethically and responsibly?
                  </div>
                </li>
                <li className=" z-10 text-center grid-rows-2 lg:w-56">
                  <div className="w-10/12 h-56 mx-auto mb-0 data-gov-component bg-white font-bold shadow-2xl rounded-2xl p-4 my-6 block text-center">
                    <Image width={80} height={100} src={programLogicModelImg} />
                    <p className="font-bold">Program Logic Model</p>
                  </div>
                  <div className="h-40 flex flex-col justify-content-center text-center italic lg:text-md px-6 dialog-section bg-main-color bg-blue-300 font-semibold border-2 border-white rounded-2xl">
                    What do we need to collect and why?
                  </div>
                </li>
                <li className=" z-10 text-center grid-rows-2 lg:w-56">
                  <div className="w-10/12 h-56 mx-auto mb-0 data-gov-component bg-white font-bold shadow-2xl rounded-2xl p-4 my-6 block text-center">
                    <Image width={80} height={100} src={dataSetDirectoryImg} />
                    <p className="font-bold">Dataset Directory</p>
                  </div>
                  <div className="h-40 flex flex-col justify-content-center text-center italic lg:text-md px-6 dialog-section bg-main-color bg-blue-300 font-semibold border-2 border-white rounded-2xl">
                    What external datasets can we use to demonstrate need and
                    impact?
                  </div>
                </li>
                <li className=" z-10 text-center grid-rows-2 lg:w-56">
                  <div className="w-10/12 h-56 mx-auto mb-0 data-gov-component bg-white font-bold shadow-2xl rounded-2xl p-4 my-6 block text-center">
                    <Image width={80} height={100} src={dataDictionaryImg} />
                    <p className="font-bold">Data Dictionary</p>
                  </div>
                  <div className="h-40 flex flex-col justify-content-center text-center italic lg:text-md px-6 dialog-section bg-main-color bg-blue-300 font-semibold border-2 border-white rounded-2xl">
                    How do we standardise and consistently describe each data
                    item we collect?
                  </div>
                </li>
                <li className=" z-10 text-center grid-rows-2 lg:w-56">
                  <div className="w-10/12 h-56 mx-auto mb-0 data-gov-component bg-white font-bold shadow-2xl rounded-2xl p-4 my-6 block text-center">
                    <Image
                      width={80}
                      height={100}
                      src={workflowAndPersonaMapImg}
                    />
                    <p>Workflow and Persona Maps</p>
                  </div>
                  <div className="h-40 flex flex-col justify-content-center text-center italic lg:text-md px-6 dialog-section bg-main-color bg-blue-300 font-semibold border-2 border-white rounded-2xl">
                    What is the flow from collection to processing to analysing
                    to use? <br />
                    Who will use the data and how?
                  </div>
                </li>
                <li className=" z-10 text-center grid-rows-2 lg:w-56">
                  <div className="w-10/12 h-56 mx-auto mb-0 data-gov-component bg-white font-bold shadow-2xl rounded-2xl p-4 my-6 block text-center">
                    <Image width={80} height={100} src={surveysImg} />
                    <p className="font-bold">Surveys</p>
                  </div>
                  <div className="h-40 flex flex-col justify-content-center text-center italic lg:text-md px-6 dialog-section bg-main-color bg-blue-300 font-semibold border-2 border-white rounded-2xl">
                    What are the standard data instruments/ surveys we use to
                    collect data?
                  </div>
                </li>
                <li className=" z-10 text-center grid-rows-2 lg:w-56">
                  <div className="w-10/12 h-56 mx-auto mb-0 data-gov-component bg-white font-bold shadow-2xl rounded-2xl p-4 my-6 block text-center">
                    <Image width={80} height={100} src={databaseImg} />
                    <p className="font-bold">Database</p>
                  </div>
                  <div className="h-40 flex flex-col justify-content-center text-center italic lg:text-md px-6 dialog-section bg-main-color bg-blue-300 font-semibold border-2 border-white rounded-2xl">
                    How do we store all of the data?
                  </div>
                </li>
                <li className=" z-10 text-center grid-rows-2 lg:w-56">
                  <div className="w-10/12 h-56 mx-auto mb-0 data-gov-component bg-white font-bold shadow-2xl rounded-2xl p-4 my-6 block text-center">
                    <Image width={80} height={100} src={integrationsImg} />
                    <p className="font-bold">Integrations</p>
                  </div>
                  <div className="h-40 flex flex-col justify-content-center text-center italic lg:text-md px-6 dialog-section bg-main-color bg-blue-300 font-semibold border-2 border-white rounded-2xl">
                    What external datasets can we use to demonstrate need and
                    impact?
                  </div>
                </li>
                <li className=" z-10 text-center grid-rows-2 lg:w-56">
                  <div className="w-10/12 h-56 mx-auto mb-0 data-gov-component bg-white font-bold shadow-2xl rounded-2xl p-4 my-6 block text-center">
                    <Image width={80} height={100} src={reportsImg} />
                    <p className="font-bold">Reports</p>
                  </div>
                  <div className="h-40 flex flex-col justify-content-center text-center italic lg:text-md px-6 dialog-section bg-main-color bg-blue-300 font-semibold border-2 border-white rounded-2xl">
                    How do we report on the data findings to identified
                    personas?
                  </div>
                </li>
              </ul>
            </article>
            <article className="container mx-auto my-20 px-5 md:px-0">
              <h2 className="my-8 pt-16 pb-7 text-center lg:text-left">
                Building a Data Governance Process for your agency
              </h2>
              <div
                id="processes-agency-list-container"
                className="grid grids-cols-1  items-center gap-4 md:gap-7 lg:grid-cols-7 lg:gap-2 lg:grid-rows-1"
              >
                <div className="h-full w-full flex flex-col shadow-2xl rounded-2xl border-2 border-white">
                  <div className="h-3/6 bg-white flex flex-col items-center p-5 justify-items-center rounded-t-2xl">
                    <Image width={60} height={65} src={surveysImg} />
                    <p className="font-bold">Surveys</p>
                  </div>
                  <div className="h-3/6 bg-yellow-cream pt-2 flex flex-col items-center justify-items-center rounded-b-2xl">
                    <Image
                      width={40}
                      height={45}
                      src={standarizedDataDictionaryImg}
                    />
                    <p className="p-3 text-sm  font-semibold text-center">
                      Standardized in data dictionary
                    </p>
                  </div>
                </div>
                <Image width={100} height={100} src={integrationsImg} />
                <div className="h-full w-full flex flex-col shadow-2xl rounded-2xl border-2 border-white ">
                  <div className="h-3/6 bg-white flex flex-col items-center p-5 justify-items-center rounded-t-2xl">
                    <Image width={60} height={65} src={databaseImg} />
                    <p className="font-bold text-center">
                      Data
                      <br /> Collection
                    </p>
                  </div>
                  <div className="h-3/6 bg-yellow-cream pt-2 flex flex-col items-center justify-items-center rounded-b-2xl">
                    <Image
                      width={40}
                      height={45}
                      src={maintainedInRealTimeImg}
                    />
                    <p className="p-3 text-sm  font-semibold text-center">
                      Maintained in real time
                    </p>
                  </div>
                </div>
                <Image width={100} height={100} src={integrationsImg} />
                <div className="h-full w-full flex flex-col shadow-2xl rounded-2xl border-2 border-white ">
                  <div className="h-3/6 bg-white flex flex-col items-center  p-5  justify-items-center rounded-t-2xl">
                    <Image width={60} height={65} src={reportsImg} />
                    <p className="font-bold">Reporting</p>
                  </div>
                  <div className="h-3/6 bg-yellow-cream pt-2  flex flex-col items-center justify-items-center rounded-b-2xl">
                    <Image width={40} height={45} src={internallyImg} />
                    <p className="p-3 text-sm  font-semibold text-center">
                      {" "}
                      Internally (for strategic planning) <br /> To funders{" "}
                      <br />
                      To community
                    </p>
                  </div>
                </div>
                <Image width={100} height={100} src={integrationsImg} />

                <div className="h-full w-full flex flex-col shadow-2xl rounded-2xl border-2 border-white ">
                  <div className="h-3/6 bg-white flex flex-col items-center   p-5 justify-items-center rounded-t-2xl">
                    <Image width={60} height={65} src={surveysImg} />
                    <p className="font-bold">Analysis</p>
                  </div>
                  <div className="h-3/6 bg-yellow-cream pt-2 pt-2 flex flex-col items-center justify-items-center rounded-b-2xl">
                    <Image width={40} height={45} src={againstWiderCityImg} />
                    <p className="p-3 text-sm  font-semibold text-center">
                      Against wider city/state data
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <div
              className="fundation-bottom-container container mx-auto  grid grid-cols-1 md:grid-cols-4 bg-white rounded-xl
                  shadow-lg p-3 gap-5 justify-items-center items-center  mb-16"
            >
              <div className="p-3">
                <h6 className="font-black text-lg">Foundation</h6>
                <p className="text-sm font-semibold">
                  Data policy, program logic model and workflow, and persona
                  maps
                </p>
              </div>
              <Image width={60} height={65} src={dataPolicyImg} />
              <Image width={60} height={65} src={programLogicModelImg} />
              <Image width={60} height={65} src={workflowAndPersonaMapImg} />
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
