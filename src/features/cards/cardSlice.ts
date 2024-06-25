import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import TAddition from 'types/Addition';
import TCardType from 'types/CardType';
import TClassHero from 'types/ClassHero';
import TCost from 'types/Cost';
import TCreationType from 'types/CreationType';
import TRarity from 'types/Rarity';
import TSpellsSchool from 'types/SpellsSchool';

interface CardState {
  addition: TAddition;
  cardType: TCardType;
  classHero: TClassHero;
  cost: TCost;
  creationType: TCreationType;
  rarity: TRarity;
  spellsSchool: TSpellsSchool;
}

const initialState: CardState = {
  addition: 'Все',
  cardType: 'Все',
  classHero: 'Все',
  cost: 'Все',
  creationType: 'Все',
  rarity: 'Все',
  spellsSchool: 'Все',
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setAddition: (state, action: PayloadAction<TAddition>) => {
      state.addition = action.payload;
    },
    setCardType: (state, action: PayloadAction<TCardType>) => {
      state.cardType = action.payload;
    },
    setClassHero: (state, action: PayloadAction<TClassHero>) => {
      state.classHero = action.payload;
    },
    setCost: (state, action: PayloadAction<TCost>) => {
      state.cost = action.payload;
    },
    setCreationType: (state, action: PayloadAction<TCreationType>) => {
      state.creationType = action.payload;
    },
    setRarity: (state, action: PayloadAction<TRarity>) => {
      state.rarity = action.payload;
    },
    setSpellsSchool: (state, action: PayloadAction<TSpellsSchool>) => {
      state.spellsSchool = action.payload;
    },
  },
});

export const { setAddition } = cardsSlice.actions;

export const selectAddition = (state: RootState) => state.cards.addition;

export default cardsSlice.reducer;
