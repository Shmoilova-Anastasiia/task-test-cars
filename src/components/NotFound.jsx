import FoundImage from '../images/FoundImage.jpeg';


const NotFound = () => {
  return (
    <section className="no-scrollbar relative flex flex-col items-center justify-start overflow-hidden">
      <h2
    //     className="responsive-font relative z-[50] mt-0
    //     flex
    //     items-start
    //     justify-center
    //     bg-gradient-to-r
    //     from-blue-300
    //     via-slate-300
    //     to-stone-500 bg-clip-text text-center text-transparent drop-shadow-[0_1px_3px_rgba(250,250,250,1)]"
      >
        No followed cars
      </h2>
      <img 
        // className={css.image}
        src={FoundImage} 
        alt="Car"
        width="274"
        height="268"
        loading="lazy"
        />
      
    </section>
  );
};

export default NotFound;