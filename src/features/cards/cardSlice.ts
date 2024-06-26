import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetAllCards } from 'api/CardAPI/GetAllCards';
import { RootState } from 'app/store';
import TAddition from 'types/Addition';
import ICard from 'types/Card';
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
  cards: ICard[] | [];
}

const initialState: CardState = {
  addition: 'Все',
  cardType: 'Все',
  classHero: 'Все',
  cost: 'Все',
  creationType: 'Все',
  rarity: 'Все',
  spellsSchool: 'Все',
  cards: [],
};

export const getAllCardsThunk = createAsyncThunk(
  'cards/getAllCards',
  async () => {
    const response = await GetAllCards();
    console.log(response, 'thunk');
    return response;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(getAllCardsThunk.fulfilled, (state, action) => {
      state.cards = action.payload;
      console.log(action.payload);
    });
  },
});

export const {
  setAddition,
  setCardType,
  setClassHero,
  setCost,
  setCreationType,
  setRarity,
  setSpellsSchool,
} = cardsSlice.actions;

export const selectAddition = (state: RootState) => state.cards.addition;

export const selectCards = (state: RootState) => state.cards.cards;

export default cardsSlice.reducer;
