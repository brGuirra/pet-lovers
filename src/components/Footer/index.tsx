import { ReactComponent as GitHub } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';

import styles from './styles.module.scss';

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>
          Feito com carinho por <span>Bruno</span>
        </p>
        <a
          className={styles.footerLink}
          href="https://github.com/brGuirra"
          target="blank"
        >
          <GitHub />
        </a>
        <a
          className={styles.footerLink}
          href="https://www.linkedin.com/in/bruno-guirra-7766b6209/"
          target="blank"
        >
          <LinkedIn />
        </a>
      </div>
    </footer>
  );
};
