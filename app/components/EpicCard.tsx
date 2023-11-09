import { BiPencil } from 'react-icons/bi';
import { BiCalendar } from 'react-icons/bi';

interface EpicCard {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  link: string;
}

interface EpicCardProps {
  epiccards: EpicCard[];
}

const EpicCard: React.FC<EpicCardProps> = ({ epiccards }) => {
  return (
    <div className="container mx-auto my-10 w-4/5">
      <div className="flex items-start justify-start flex-col">
        <h1 className="text-2xl lg:text-5xl pb-6 ml-4 font-semibold">Epics</h1>
        <ul className="w-full h-full flex flex-col justify-center items-center">
          {epiccards.map((epiccard, index) => (
            <li key={epiccard.id}>
              <a href={epiccard.link} className="no-underline">
                <div className="p-4 border border-gray-300 hover:border-gray-500 hover:bg-gray-100/80 
                dark:hover:bg-black/80 dark:border-gray-700 hover:dark:border-gray-200 rounded-lg transition duration-300 cursor-pointer justify-start items-start flex flex-col m-4">
                  <img
                    src={epiccard.image}
                    alt="EpicCard Title"
                    className="w-full h-auto  mb-4 rounded-md object-contain"
                  />
                  <h2 className="text-2xl font-semibold dark:text-gray-200">
                    {epiccard.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {epiccard.description}
                  </p>
                  <div className="flex items-center mt-2">
                    <p className="text-sm dark:text-gray-300 font-bold">
                      <BiPencil className="inline-block mr-2 text-xl" />{' '}
                      {epiccard.author}
                    </p>
                    <p className="ml-4 text-sm dark:text-gray-300">
                      <BiCalendar className="inline-block mr-2 text-xl" />{' '}
                      {epiccard.date}
                    </p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EpicCard;
