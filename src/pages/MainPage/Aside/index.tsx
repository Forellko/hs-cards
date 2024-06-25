import Addition from './Addition';
import CardType from './CardType';
import Class from './Class';
import Cost from './Cost';
import CreationType from './CreationType';
import Rarity from './Rarity';
import SpellsSchool from './SpellsSchool';
import style from './style.module.css';

function Aside() {
  return (
    <aside className={style.aside}>
      <Addition />
      <Class />
      <Cost />
      <CardType />
      <CreationType />
      <SpellsSchool />
      <Rarity />
    </aside>
  );
}

export default Aside;
