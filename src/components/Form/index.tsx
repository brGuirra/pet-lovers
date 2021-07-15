import styles from './styles.module.scss';

export const Form = (): JSX.Element => {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Digite o seu e-mail" />
      <button type="button">Cadastrar</button>
    </form>
  );
};
