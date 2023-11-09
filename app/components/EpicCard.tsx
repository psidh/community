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
              <a href={epiccard.link}>
                <div
                  className="p-4 border 

                border-gray-300 
                hover:border-gray-500
                hover:bg-gray-100/80 

                dark:hover:bg-black/80
                dark:border-gray-600  
                hover:dark:border-gray-200 rounded-lg transition duration-300
                cursor-pointer justify-start items-start flex m-4
                "
                >
                  <div className="flex ">
                    <img
                      src={epiccard.image}
                      alt="EpicCard Title"
                      className="w-full h-full m-4 rounded-2xl"
                    />{' '}
                  </div>

                  <div className="flex flex-col items-start justify-center">
                    <h2 className="text-3xl font-semibold py-2 mt-4 dark:text-gray-200">
                      {epiccard.title}
                    </h2>
                    <p className="text-md py-2 text-gray-500 dark:text-gray-400">
                      {epiccard.description}
                    </p>
                    <p className="text-lg py-2 dark:text-gray-300 font-bold text-left">
                      <BiPencil className="inline-block mr-3" />{' '}
                      {epiccard.author}
                    </p>
                    <p>
                      <BiCalendar className="inline-flex mr-3 text-xl" />{' '}
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
