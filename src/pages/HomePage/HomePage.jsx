import css from './home-page.module.css';

const HomePage = () => {
  return (
    <section>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to Phonebook!</h1>
      </div>
    </section>
  );
};

export default HomePage;
