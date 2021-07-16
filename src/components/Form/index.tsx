import { useState } from 'react';

import styles from './styles.module.scss';

interface FormProps {
  saveCustomerEmail: (customerEmail: string) => void;
}

export const Form = ({ saveCustomerEmail }: FormProps): JSX.Element => {
  const [customerEmail, setCustomerEmail] = useState<string>('');

  function handleChange(e: React.FormEvent<HTMLInputElement>): void {
    const newValue = e.currentTarget.value;
    setCustomerEmail(newValue);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    saveCustomerEmail(customerEmail);
    setCustomerEmail('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Digite o seu e-mail"
        value={customerEmail}
        onChange={handleChange}
      />
      <button type="button">Cadastrar</button>
    </form>
  );
};
