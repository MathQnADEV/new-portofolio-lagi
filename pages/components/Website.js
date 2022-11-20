/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

const Website = () => {
    return(
        <section>
            <div className="dark:text-white">
              <h3 className="text-3xl py-1 dark:text-white">Portofolio</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                Sejak awal perjalanan saya sebagai Freelancer Fullstack Web
                Developer Saya telah melakukan Work From Home untuk
                <span className="text-teal-500"> agencies </span>
                consulted untuk <span className="text-teal-500">
                  startup
                </span>{" "}
                dan berkolaborasi dengan orang-orang berbakat untuk menciptakan
                produk digital baik untuk penggunaan bisnis maupun konsumen.
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
                Saya menawarkan dari berbagai layanan termasuk desain web
                pemograman ( Fullstack Web ) dan pengajaran Bahasa Pemograman.
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <Image
                  src={web1}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web2}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web3}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web4}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web5}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  src={web6}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            </div>
          </section>
    )
}

export default Website