import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Form } from './components/Form';
import { Gallery } from './components/Gallery';
import { Details } from './components/Details';
import { Footer } from './components/Footer';

import styles from './styles/App.module.scss';

function App(): JSX.Element {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Header />
          <main>
            <Intro />
            <Form />
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
