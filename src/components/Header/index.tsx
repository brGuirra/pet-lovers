import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

import styles from './styles.module.scss';

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};
