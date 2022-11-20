import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Fragment } from 'react'
import {Menu, Transition } from '@headlessui/react'
import Dashboards from "./components/Dashboards";
import Cards from "./components/Cards";
import Website from "./components/Website";
import Footer from "./components/Footer";
import { useState } from "react";
import Upcoming from "./components/Upcoming";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>MathQnADEV Portofolio</title>
        <meta name="description" content="My Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <div className="min-h-screen">
          <nav className="py-5 mb-12 flex justify-between sticky top-0 backdrop-blur-sm rounded-lg">
            <h1 className="text-xl font-burtons dark:text-teal-600">
              MathQnADEV
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-teal-500"
                />
              </li>
              <li>
                <Menu as='div' className="relative ml-3">
                  <div>
                <Menu.Button class="text-white px-4 py-2 rounded-md ml-8 transition ease-in-out delay-150 bg-gradient-to-r from-cyan-500 to-teal-500 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                <a href="#">Resume</a>
                </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-cyan-300 rounded-md' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-cyan-300 rounded-md' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-cyan-300 rounded-md' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
            </ul>
          </nav>
          <Dashboards />
          <Cards />
          <Website />
          <Upcoming />
          <Footer />
        </div>
      </main>
    </div>
  );
}
