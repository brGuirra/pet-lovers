import { useState, useEffect } from 'react';

import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Form } from './components/Form';
import { Gallery } from './components/Gallery';
import { Details } from './components/Details';
import { Footer } from './components/Footer';
import { SuccessMessage } from './components/SuccessMessage';

import styles from './styles/App.module.scss';

function App(): JSX.Element {
  const [isUserAlreadyRegistered, setIsUserAlreadyRegistered] = useState(false);

  useEffect(() => {
    const hasEmail = localStorage.getItem('EMAIL');

    if (hasEmail) {
      setIsUserAlreadyRegistered(true);
    }
  }, []);

  function saveCustomerEmail(customerEmail: string): void {
    localStorage.setItem('EMAIL', customerEmail);
    setIsUserAlreadyRegistered(true);
  }

  return (
    <>
      <div className={styles.container}>
        <div>
          <Header />
          <main>
            <Intro />
            {isUserAlreadyRegistered ? (
              <SuccessMessage />
            ) : (
              <Form saveCustomerEmail={saveCustomerEmail} />
            )}

            <Details />
          </main>
        </div>
        <Gallery />
      </div>
      <Footer />
    </>
  );
}

export default App;
