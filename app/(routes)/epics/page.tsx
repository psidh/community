import React from 'react';
import Pageconstruct from '../../components/PUC';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';

function epics() {
  const hrefClass = `text-xl md:text-3xl mt-6 hover:shadow-lg rounded-full transition duration-300 
  hover:translate-x-4 border flex justify-center items-center px-6 py-2
bg-white dark:bg-black  hover:text-white`;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <a
        href="/epics/maha"
        className={`${hrefClass} text-orange-600 hover:bg-orange-600`}
      >
        <IoArrowForwardCircleOutline className="mr-2 inline-block" />
        Māhābharat
      </a>

      <a
        href="/epics/ramayana"
        className={`${hrefClass} text-teal-600 hover:bg-teal-600`}
      >
        <IoArrowForwardCircleOutline className="mr-2 inline-block" />
        Rāmayana
      </a>
    </div>
  );
}

export default epics;
