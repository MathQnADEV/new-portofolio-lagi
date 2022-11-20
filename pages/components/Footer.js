import { 
    AiFillDribbbleSquare,
    AiFillFacebook,
    AiFillGithub,
    AiFillInstagram,
    AiFillTwitterSquare
} from "react-icons/ai";

const Footer = () => {
    return (
        <div>
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-800 dark:text-white'>
        <div>
          <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Next JS.</h1>
          <p className='py-4'>Website ini dibuat menggunakan Next JS framework dan untuk portofolio utama MathQnADEV.
          Terimakasih telah berkunjung di Website saya. Lumayan tambah jam terbang wkkwkw</p>
          <div className='flex justify-between md:w-[75%] my-6'>
              <AiFillFacebook size={30} />
              <AiFillInstagram size={30} />
              <AiFillTwitterSquare size={30} />
              <AiFillGithub size={30} />
              <AiFillDribbbleSquare size={30} />
          </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
      <div>
          <h6 className='font-medium text-gray-500'>Solutions</h6>
          <ul>
              <li className='py-2 text-sm'>Analytics</li>
              <li className='py-2 text-sm'>Marketing</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Insights</li>
          </ul>
      </div>
      <div>
          <h6 className='font-medium text-gray-500'>Support</h6>
          <ul>
              <li className='py-2 text-sm'>Pricing</li>
              <li className='py-2 text-sm'>Documentation</li>
              <li className='py-2 text-sm'>Guides</li>
              <li className='py-2 text-sm'>API Status</li>
          </ul>
      </div>
      <div>
          <h6 className='font-medium text-gray-500'>Company</h6>
          <ul>
              <li className='py-2 text-sm'>About</li>
              <li className='py-2 text-sm'>Blog</li>
              <li className='py-2 text-sm'>Jobs</li>
              <li className='py-2 text-sm'>Press</li>
              <li className='py-2 text-sm'>Careers</li>
          </ul>
      </div>
      <div>
          <h6 className='font-medium text-gray-500'>Legal</h6>
          <ul>
              <li className='py-2 text-sm'>Claim</li>
              <li className='py-2 text-sm'>Policy</li>
              <li className='py-2 text-sm'>Terms</li>
          </ul>
      </div>
        </div>
      </div>
      <div className="pb-10 text-center text-gray-600 dark:text-gray-400">
        <center>
            <hr className="w-40 border-gray-800 dark:border-gray-500"/>
        </center>
        <p className='mt-7'>© 2022 <span className="font-burtons">MathQnADEV</span>,Inc. All rights reserved</p>
      </div>
      </div>
    );
  };
  
  export default Footer;