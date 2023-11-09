const Footer: React.FC = () => {

  const hoverClass =`underline-offset-3 hover:underline hover:text-teal-600 dark:hover:text-teal-400`;

  const footerGridClass = `justify-start items-start flex flex-col p-4 mx-2`;
  
  return (
    <nav className="text-lg p-4">
      <hr className="w-full border border-gray-300 dark:border-gray-600 mb-4" />
      <h1 className='text-3xl md:text-4xl container md:mx-auto ml-10 my-8'>Explore More...</h1>
      <div className="grid flex-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-10 mt-4">
        <div className={footerGridClass}>
          <p className="text-xl py-2 font-bold">Myths</p>
          <p>Caste</p>
          <p>Sati</p>
          <p>Discrimination against Women</p>
        </div>
        <div className={footerGridClass}>
          <p className="text-xl py-2 font-bold">Sāmpradayās</p>
          <a href='/sampradayas/vaishnava' className={hoverClass}>Vaishnava</a>
          <a href='/sāmpradayas/shaivites' className={hoverClass}>Shaivites</a>
          <a href='/sampradayas/shaktas' className={hoverClass}>Shaktās</a>
          <a href='/sampradayas/smarthas' className={hoverClass}>Smārthās</a>
        </div>
        <div className={footerGridClass}>
          <p className="text-xl py-2 font-bold">Epics</p>
          <a href='/epics/ramayana' className={hoverClass}>Rāmayana</a>
          <a href='/epics/maha' className={hoverClass}>Mahābhārata</a>
        </div>
        <div className={footerGridClass}>
          <p className="text-xl py-2 font-bold">Schools of thought</p>
          <a href='/schools-of-thought/vedanta' className={hoverClass}>Vedanta</a>
          <a href='/schools-of-thought/advaita' className={hoverClass}>Advaita</a>
          <a href='/schools-of-thought/bhakti' className={hoverClass}>Bhakti</a>
          <a href='/schools-of-thought/achintya-bheda-abheda' className={hoverClass}>Achintya Bheda Abheda</a>
          <a href='/schools-of-thought/carvaka' className={hoverClass}>Cārvāka</a>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
