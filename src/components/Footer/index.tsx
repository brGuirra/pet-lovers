import { ReactComponent as GitHub } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';

import styles from './styles.module.scss';

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className={styles.container}>
        <p>
          Feito com carinho por <span>Bruno</span>
        </p>
        <a href="https://github.com/brGuirra" target="blank">
          <GitHub />
        </a>
        <a
          href="https://www.linkedin.com/in/bruno-guirra-7766b6209/"
          target="blank"
        >
          <LinkedIn />
        </a>
      </div>
    </footer>
  );
};
