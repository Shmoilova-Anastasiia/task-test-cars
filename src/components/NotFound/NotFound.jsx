import FoundImage from '../../images/FoundImage.jpeg';
import css from './NotFound.module.css'

const NotFound = () => {
  return (
    <section className={css.container}>
      
      <img 
        className={css.image}
        src={FoundImage} 
        alt="Car"
        width="274"
        height="268"
        loading="lazy"
        />
      <h2
    className={css.title}
      >
        No followed cars
      </h2>
    </section>
  );
};

export default NotFound;