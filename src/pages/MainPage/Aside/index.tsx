import Addition from './AdditionFilter';
import CardType from './CardTypeFilter';
import ClassHero from './ClassHeroFilter';
import Cost from './CostFilter';
import CreationType from './CreationTypeFilter';
import Rarity from './RarityFilter';
import SpellsSchool from './SpellsSchoolFilter';
import style from './style.module.css';

function Aside() {
  return (
    <aside className={style.aside}>
      <Addition />
      <ClassHero />
      <Cost />
      <CardType />
      <CreationType />
      <SpellsSchool />
      <Rarity />
    </aside>
  );
}

export default Aside;
