import { BiPencil } from 'react-icons/bi';
import { BiCalendar } from 'react-icons/bi';

interface MythCard {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  link: string;
}

interface MythCardProps {
  mythcard: MythCard[];
}

const Card: React.FC<MythCardProps> = ({ mythcard }) => {
  return (
    <div className="container mx-auto my-10 w-4/5">
      <div className="flex items-start justify-start flex-col">
        <h1 className="text-4xl lg:text-5xl pb-6 ml-4 font-semibold">
          Popular Myths
        </h1>
        <ul className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {mythcard.map((idea, index) => (
            <li key={idea.id}>
              <a href={idea.link}>
                <div
                  className="p-4 border 

                border-gray-300 
                hover:border-gray-500
                hover:bg-gray-100/80 
                hover:dark:bg-gray-900/70

                dark:border-gray-600  
                hover:dark:border-gray-200 
                hover:-translate-y-4
                rounded-lg transition duration-300
                cursor-pointer justify-start items-start flex flex-col m-4
                "
                >
                  <img
                    src={idea.image}
                    alt="Card Title"
                    className="w-auto h-[200px]  mb-4 rounded-2xl"
                  />
                  <h2 className="text-3xl font-semibold py-2 dark:text-gray-200">
                    {idea.title}
                  </h2>
                  <p className="text-md py-2 text-gray-500 dark:text-gray-400">
                    {idea.description}
                  </p>
                  <p className="text-lg py-2 dark:text-gray-300 font-bold text-left">
                    <BiPencil className="inline-block mr-3" /> {idea.author}
                  </p>
                  <p>
                    <BiCalendar className="inline-flex mr-3 text-xl" />{' '}
                    {idea.date}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
