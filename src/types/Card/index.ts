import TAddition from 'types/Addition';
import TCardType from 'types/CardType';
import TClassHero from 'types/ClassHero';
import TCost from 'types/Cost';
import TCreationType from 'types/CreationType';
import TRarity from 'types/Rarity';
import TSpellsSchool from 'types/SpellsSchool';

interface ICard {
  id: string;
  name: string;
  description: string;
  addition: TAddition;
  cardType: TCardType;
  classHero: TClassHero;
  cost: TCost;
  creationType: TCreationType;
  rarity: TRarity;
  spellsSchool: TSpellsSchool;
}

export default ICard;
