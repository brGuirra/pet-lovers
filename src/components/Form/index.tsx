import { useState, useRef } from 'react';
import { ErrorMessage } from '../ErrorMessage';

import styles from './styles.module.scss';

type ErrorMessage = {
  message: string;
  hasError: boolean;
};

interface FormProps {
  saveCustomerEmail: (customerEmail: string) => void;
}

export const Form = ({ saveCustomerEmail }: FormProps): JSX.Element => {
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [error, setError] = useState<ErrorMessage>({
    message: '',
    hasError: false,
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  function handleChange(e: React.FormEvent<HTMLInputElement>): void {
    const newValue = e.currentTarget.value;

    setCustomerEmail(newValue);
    setError({
      message: '',
      hasError: false,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (!customerEmail) {
      setError({ message: 'Este campo é obrigatório', hasError: true });
      inputRef.current?.focus();
      return;
    }

    if (!regex.test(customerEmail)) {
      setError({
        message: 'Digite um e-mail válido, ex: seuemail@email.com',
        hasError: true,
      });
      inputRef.current?.focus();
      return;
    }

    saveCustomerEmail(customerEmail);
    setCustomerEmail('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.input}>
        <input
          type="text"
          placeholder="Digite o seu e-mail"
          value={customerEmail}
          onChange={handleChange}
          ref={inputRef}
          className={error.hasError ? styles.error : ''}
        />
        {error.hasError && <ErrorMessage message={error.message} />}
      </div>
      <button className={styles.btn} type="submit">
        Cadastrar
      </button>
    </form>
  );
};
