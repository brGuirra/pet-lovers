import styles from './styles.module.scss';

export const Intro = (): JSX.Element => {
  return (
    <div className={styles.intro}>
      <h1>
        BlackFriday
        <br />
        PetLovers
      </h1>
      <p>Você vai amar as ofertas e o seu bichinho vai amar os mimos!</p>
    </div>
  );
};
