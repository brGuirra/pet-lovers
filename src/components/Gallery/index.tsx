import Dog1 from '../../assets/images/dog-1.jpg';
import Dog2 from '../../assets/images/dog-2.jpg';
import Cat1 from '../../assets/images/cat-1.jpg';
import Cat2 from '../../assets/images/cat-2.jpg';
import CatAndDog from '../../assets/images/cat-and-dog.jpg';
import Hamster from '../../assets/images/hamster.jpg';
import Lizard from '../../assets/images/lizard.jpg';
import Turtle from '../../assets/images/turtle.jpg';
import Cockatiel from '../../assets/images/cockatiel.jpg';

import styles from './styles.module.scss';

export const Gallery = (): JSX.Element => {
  return (
    <aside>
      <ul className={styles.gallery}>
        <li>
          <img src={Dog1} alt="" />
        </li>
        <li>
          <img src={Turtle} alt="" />
        </li>
        <li>
          <img src={Cat1} alt="" />
        </li>
        <li>
          <img src={Lizard} alt="" />
        </li>
        <li>
          <img src={CatAndDog} alt="" />
        </li>
        <li>
          <img src={Dog2} alt="" />
        </li>
        <li>
          <img src={Hamster} alt="" />
        </li>
        <li>
          <img src={Cockatiel} alt="" />
        </li>
        <li>
          <img src={Cat2} alt="" />
        </li>
      </ul>
    </aside>
  );
};
