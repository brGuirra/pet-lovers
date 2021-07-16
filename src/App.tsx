import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Form } from './components/Form';
import { Gallery } from './components/Gallery';
import { Details } from './components/Details';

import styles from './styles/App.module.scss';

function App(): JSX.Element {
  return (
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
  );
}

export default App;
