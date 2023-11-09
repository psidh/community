import '../rotate.css';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
function Logo() {
  return (
    <div>
      <div
        className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-between justify-center items-center 
    py-4 container md:mx-auto"
      >
        <div className="sm:w-full lg:w-1/2 sm:px-2 md:px-4 lg:px-8 pb-8 flex flex-col justify-start items-start mx-8">
          <p className="text-md font-normal py-4 text-justify text-lg md:text-xl">
            <span className="text-orange-500 text-5xl">
              {' '}
              The Hindu civilization
            </span>{' '}
            has given birth to profound philosophies, intricate art forms, and
            valuable scientific knowledge, which have had a lasting impact on
            the world. However, this heritage is currently facing various
            threats, including cultural erosion, historical misrepresentation,
            and even political challenges.
          </p>
          <p className="text-md font-normal py-2 text-justify text-lg">
            Reviving the <span className=" italic">pride</span> and{' '}
            <span className=" italic">preservation</span> of Hindu civilization
            can help humanity by fostering greater understanding and respect for
            diversity. It can also serve as a source of inspiration for
            innovation, tolerance, and cooperation, promoting a world where
            different cultures and beliefs can coexist harmoniously.
          </p>
          <a
            href="/about"
            className="text-3xl mt-6 hover:shadow-lg rounded-full transition duration-300 
            hover:translate-x-8 border flex justify-center items-center px-6 py-2
          bg-white dark:bg-black text-orange-600 hover:bg-orange-600 hover:text-white"
          >
            <IoArrowForwardCircleOutline className="mr-2 inline-block" />
            About
          </a>
        </div>
        <img
          src="/chakra.jpeg"
          alt="Logo"
          className={`chakra-logo w-1/2 h-1/2 md:w-1/3 md:h-1/3 
        rounded-full animate-rotation-chakra duration-300 mb-8 stop-rotate-on-hover m-6`}
        />
      </div>
    </div>
  );
}

export default Logo;
