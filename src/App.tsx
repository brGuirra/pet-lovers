import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Form } from './components/Form';

import styles from './styles/App.module.scss';
import { Details } from './components/Details';

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
      <aside />
    </div>
  );
}

export default App;
