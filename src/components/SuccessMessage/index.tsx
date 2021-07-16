import styles from './styles.module.scss';

export const SuccessMessage = (): JSX.Element => {
  return (
    <div className={styles.successMessage}>
      <strong>Obrigado por se cadastrar!</strong>
      <p>
        Prometemos que não vamos lotar a sua <br /> caixa com mensagens.
      </p>
    </div>
  );
};
