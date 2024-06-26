import { Box, Button, Modal } from '@mui/material';
import { DeleteCard } from 'api/CardAPI/DeleteCard';
import { useAppDispatch } from 'app/hooks';
import { getAllCardsThunk } from 'features/cards/cardSlice';
import React from 'react';
import ICard from 'types/Card';

interface Props {
  open: boolean;
  handleClose: Function;
  card: ICard;
}

const stylesx = {
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

function OpenCardModal({ open, handleClose, card }: Props) {
  const dispatch = useAppDispatch();

  const removeCard = async () => {
    await DeleteCard(card);
    dispatch(getAllCardsThunk());
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={stylesx}>
          <img src={card.imageURL} alt="card" />
          <Button onClick={removeCard} variant="contained" color="error">
            Удалить
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default OpenCardModal;
