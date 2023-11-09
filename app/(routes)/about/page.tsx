import { IoArrowBackCircleOutline} from 'react-icons/io5';

function About() {
  const buttonClass = `text-xl my-6 hover:shadow-lg rounded-full transition duration-300 
  hover:translate-x-8 border px-6 py-2 ml-10
  bg-white dark:bg-black text-orange-500 hover:bg-orange-500 hover:text-white`;

  return (
    <div className="min-h-screen container md:mx-auto">
      <a href="/" className={buttonClass}>
        <IoArrowBackCircleOutline className="mr-2 inline-block" />
        Home
      </a>
      <p className="text-5xl text-orange-500 ml-10 mt-10">About</p>
      <div className="flex flex-col items-center justify-center">
        <img
          src="/warrior.png"
          alt="Two Warriors"
          className={`w-1/2 h-1/2 md:w-1/3 md:h-1/3 rounded-2xl duration-300 mt-8 md:m-10`}
        />
        <p className="text-md m-4 md:m-0 text-gray-800 dark:text-gray-300 font-normal pt-1 text-justify text-lg md:text-xl italic">
          Indeed, for a warrior, there is no better engagement than fighting for
          upholding of righteousness.{' '}
        </p>
        <p className="text-md m-4 md:m-0 text-gray-400 dark:text-gray-400font-normal pb-1 text-justify text-lg md:text-xl italic">
          Bhagavad Gita 2.1
        </p>
        <div className="text-md text-gray-900 dark:text-gray-200 font-normal py-4 text-justify text-lg md:text-xl m-4">
          <p className="m-4">
            Indian culture, particularly{' '}
            <span className="text-orange-500">Bhartiya culture</span> , holds
            profound significance beyond its historical customs. It encapsulates
            a rich heritage rooted in{' '}
            <span className="text-orange-500">Hindu traditions</span> , moral
            values, and spiritual wisdom, serving as a guiding compass for a
            harmonious life. By preserving and practicing these traditions, we
            honor our ancestors' wisdom and access a deep well of knowledge to
            navigate the complexities of the modern world.
          </p>
          <p className="m-4">
            To promote and preserve this cultural legacy, we use a dedicated
            website as a powerful tool. This platform dispels myths, counters
            stereotypes, and offers unbiased insights into the values and
            rituals of Bhartiya culture. Additionally, it acts as an educational
            hub, making this vast tapestry of knowledge accessible to a global
            audience through articles, videos, forums, and resources. By
            leveraging modern tools, we aim to perpetuate this legacy, enabling
            individuals to lead more{' '}
            <span className="text-green-600 italic">
              balanced, purposeful lives while fostering global understanding
              and respect for our cultural heritage.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
