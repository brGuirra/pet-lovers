import { ReactComponent as ThinkingFace } from '../../assets/icons/thinking-face.svg';
import { ReactComponent as ProgressiveDiscount } from '../../assets/icons/progressive-discount.svg';
import { ReactComponent as Cupons } from '../../assets/icons/cupons.svg';
import { ReactComponent as CashBack } from '../../assets/icons/cashback.svg';

import styles from './styles.module.scss';

export const Details = (): JSX.Element => {
  return (
    <section className={styles.container}>
      <h2>
        O que vai rolar? <ThinkingFace />
      </h2>
      <div className={styles.detailItem}>
        <div className={styles.icon}>
          <ProgressiveDiscount />
        </div>
        <div className={styles.info}>
          <h6>Desconto progressivo</h6>
          <p>
            Alguns itens vão ter um percetual de desconto progressivo, eles vão
            ter um selo indicativo.
          </p>
        </div>
      </div>
      <div className={styles.detailItem}>
        <div className={styles.icon}>
          <Cupons />
        </div>
        <div className={styles.info}>
          <h6>Cupons</h6>
          <p>
            Vamos liberar vários cupons de descontos pra você aproveitar. Fica
            de olho no seu e-mail!
          </p>
        </div>
      </div>
      <div className={styles.detailItem}>
        <div className={styles.icon}>
          <CashBack />
        </div>
        <div className={styles.info}>
          <h6>Cashback</h6>
          <p>Compre com o nosso cartão e ganhe 5% de cashback.</p>
          <p className={styles.cashBackRule}>
            O cashback é creditado em até 30 dias após a compra.
          </p>
        </div>
      </div>
    </section>
  );
};
