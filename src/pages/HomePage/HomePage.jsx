import css from './home-page.module.css';
import img from '../../components/image/phonebook.png';

const HomePage = () => {
  return (
    <section>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to Phonebook!</h1>
        <img className={css.img} src={img} alt="phonebook" />
      </div>
    </section>
  );
};

export default HomePage;
