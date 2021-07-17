import styles from './styles.module.scss';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps): JSX.Element => {
  return <span className={styles.errorMessage}>{message}</span>;
};
