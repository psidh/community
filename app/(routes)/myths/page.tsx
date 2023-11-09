import { IoArrowBackCircleOutline } from 'react-icons/io5';

function Myths() {
  return (
    <div className="min-h-screen container md:mx-auto">
      <a
        href="/"
        className="text-xl my-6 hover:shadow-lg rounded-full transition duration-300 
        hover:translate-x-8 border px-6 py-2 ml-10
        bg-white dark:bg-black text-orange-500 hover:bg-orange-500 hover:text-white"
      >
        <IoArrowBackCircleOutline className="mr-2 inline-block" />
        Home
      </a>
      <p className="text-5xl text-orange-500 ml-10 mt-10">Myths</p>
      <div className="flex flex-col items-center justify-center">
        <img
          src="/images/mythCardImages/caste.avif"
          alt="Two Warriors"
          className={`w-1/2 h-1/2 md:w-1/3 md:h-1/3 rounded-2xl duration-300 mt-8 md:m-10`}
        />
        <p className="text-md m-4 md:m-0 text-gray-800 dark:text-gray-300 font-normal pt-1 text-justify text-lg md:text-xl italic">
          "Truth alone triumphs, not falsehood"
        </p>
        <p className="text-md m-4 md:m-0 text-gray-500 dark:text-gray-400font-normal pb-1 text-justify text-lg md:text-xl italic">
          Mundaka Upanishad
        </p>
        <div className="text-md text-gray-900 dark:text-gray-400 font-normal py-4 text-justify text-lg md:text-xl m-4">
          <p className="m-4">
            Myths about{' '}
            <span className="text-orange-500 italic"> Hinduism</span> have
            sometimes been propagated by certain
            <span className="text-red-500 font-semibold">
              {' '}
              Marxist and communist ideologies
            </span>{' '}
            , often stemming from a misunderstanding or misinterpretation of
            this ancient religion.
          </p>

          <p className="m-4">
            For instance, some have mischaracterized Hinduism as inherently
            oppressive due to <span className="italic">caste-based</span>{' '}
            discrimination. It's important to recognize that Hinduism is a
            diverse and evolving tradition that encompasses a wide range of
            beliefs and practices. Another myth perpetuated is the
            misrepresentation of Hindu rituals and traditions as mere
            superstitions, neglecting their deeper spiritual and philosophical
            significance.
          </p>

          <p className="m-4">
            Debunking myths is crucial to counter misunderstandings that
            undermine Hindu culture's global contributions. Accurate information
            fosters balanced understanding, appreciating its wisdom, depth, and
            modern relevance.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Myths;
