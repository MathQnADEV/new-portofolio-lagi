import Image from "next/image";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";

const Cards = () => {
    return(
        <section>
            <div className="dark:text-white">
              <h3 className="text-3xl py-1 mt-10">Services I offer</h3>
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
            <div className="lg:flex gap-10">
              <div className="bg-gradient-to-l text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-r from-cyan-500 to-white">
                <center>
                  <Image src={design} width={100} height={100} />
                </center>
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Membuat desain elegan yang sesuai dengan kebutuhan anda
                  mengikuti teori desin inti
                </p>
                <h4 className="py-4 text-gray-900">Design tools I use</h4>
                <p className="text-gray-800 py-1">Adobe Photoshop</p>
                <p className="text-gray-800 py-1">Adobe Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
              </div>
              <div className="bg-gradient-to-r from-cyan-500 to-teal-500 text-center shadow-lg p-10 rounded-xl my-10">
                <center>
                  <Image src={consulting} width={100} height={100} />
                </center>
                <h3 className="text-lg font-medium pt-8 pb-2">
                  Beautiful Website
                </h3>
                <p className="py-2">
                  Membuat Website dinamis yang sesuai dengan perkembangan
                  teknologi
                  <br />
                </p>
                <h4 className="py-4 text-gray-900">Coding tools I use</h4>
                <p className="text-gray-800 py-1">Visual Studio Code</p>
                <p className="text-gray-800 py-1">Javascript language</p>
                <p className="text-gray-800 py-1">Next js framework</p>
              </div>
              <div className="bg-gradient-to-l  text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-r from-white to-teal-500">
                <center>
                  <Image src={code} width={100} height={100} />
                </center>
                <h3 className="text-lg font-medium pt-8 pb-2">Dynamic Data</h3>
                <p className="py-2">
                  Membuat backend yang fleksibel dilengkapi Keamanan tingkat
                  tinggi
                </p>
                <h4 className="py-4 text-gray-900">Backend tools I use</h4>
                <p className="text-gray-800 py-1">MySQL</p>
                <p className="text-gray-800 py-1">
                  Firebase ( google database )
                </p>
                <p className="text-gray-800 py-1">
                  Nodejs (framework javascript)
                </p>
              </div>
            </div>
          </section>
    )
}
export default Cards