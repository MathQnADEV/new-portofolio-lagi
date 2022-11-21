/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import {
    AiFillTwitterCircle,
    AiFillGithub,
    AiFillInstagram,
  } from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/kane-no-backg.png";

const Dashboards = () => {
    return(
        <div className="text-center p-0 dark:text-white">
            <h2 className="text-teal-500 text-5xl py-2 color font-medium md:text-6xl text-center ml-2">
                Shaquille Rashaun
            </h2>
            <div className="text-2xl py-5 md:text-3xl">
            <h3 className="mb-4">
                Fullstack Web Developer
            </h3>
            <p className="text-md leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
                Freelancer yang menyediakan layanan untuk kebutuhan content
                pemograman Fullstack Web Developer. Bergabunglah dengan saya di
                bawah ini and let's get CRACKING!
            </p>
        </div><div className="text-5xl flex justify-center gap-16 pt-5 pb-2s text-gray-600 dark:text-white">
                <a
                    href="https://twitter.com/MathqnaDEV"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiFillTwitterCircle />
                </a>
                <a
                    href="https://github.com/MathQnADEV"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiFillGithub />
                </a>
                <a
                    href="https://www.instagram.com/shaqy9/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiFillInstagram />
                </a>
            </div>
            <div className="realtive mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:w-96 md:h-96">
                <Image
                    src={deved}
                    className="w-80 h-80 md:w-96 md:h-96 object-cover ml-3" />
            </div>
            </div>
    );
};

export default Dashboards