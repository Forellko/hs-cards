import { Box, Button, Modal, TextField } from '@mui/material';
import React, { useState } from 'react';
import Addition from './AdditionInput';
import TAddition from 'types/Addition';
import style from './style.module.css';
import ClassHero from './ClassHeroInput';
import TClassHero from 'types/ClassHero';
import TCost from 'types/Cost';
import Cost from './CostInput';
import TCardType from 'types/CardType';
import CardType from './CardTypeInput';
import TCreationType from 'types/CreationType';
import CreationType from './CreationTypeInput';
import TSpellsSchool from 'types/SpellsSchool';
import SpellsSchool from './SpellsSchoolInput';
import TRarity from 'types/Rarity';
import Rarity from './RarityInput';
import ICard from 'types/Card';
import { CreateCard } from 'api/CardAPI/CreateCard';
import { useAppDispatch } from 'app/hooks';
import { getAllCardsThunk } from 'features/cards/cardSlice';

const stylebx = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  handleClose: Function;
}

function InputCardModal({ open, handleClose }: Props) {
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [addition, setAddition] = useState<TAddition>('Все');
  const [heroClass, setHerroClass] = useState<TClassHero>('Все');
  const [cost, setCost] = useState<TCost>('Все');
  const [cardType, setCardType] = useState<TCardType>('Все');
  const [creationType, setCreationType] = useState<TCreationType>('Все');
  const [spellsSchool, setSpellsSchool] = useState<TSpellsSchool>('Все');
  const [rarity, setRarity] = useState<TRarity>('Все');

  const dispatch = useAppDispatch();

  const createCard = async () => {
    const card: ICard = {
      addition,
      cardType,
      classHero: heroClass,
      cost,
      creationType,
      imageURL,
      name,
      rarity,
      spellsSchool,
    };

    await CreateCard(card);
    dispatch(getAllCardsThunk());
    onClose();
  };

  const onClose = () => {
    setName('');
    setImageURL('');
    setAddition('Все');
    setHerroClass('Все');
    setCost('Все');
    setCardType('Все');
    setCreationType('Все');
    setSpellsSchool('Все');
    setRarity('Все');
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => onClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylebx}>
          <div className={style.modal_box_flex}>
            <TextField
              id="standard-basic"
              label="Имя"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              id="standard-basic"
              label="URL картинки"
              variant="standard"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
            <Addition addition={addition} setAddition={setAddition} />
            <ClassHero heroClass={heroClass} setHerroClass={setHerroClass} />
            <Cost cost={cost} setCost={setCost} />
            <CardType cardType={cardType} setCardType={setCardType} />
            <CreationType
              creationType={creationType}
              setCreationType={setCreationType}
            />
            <SpellsSchool
              spellsSchool={spellsSchool}
              setSpellsSchool={setSpellsSchool}
            />
            <Rarity rarity={rarity} setRarity={setRarity} />
            <Button variant="contained" onClick={createCard}>
              Создать
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default InputCardModal;
