import axios from 'axios';
import ICard from 'types/Card';

export const DeleteCard = async (card: ICard) => {
  const res = await axios({
    method: 'delete',
    url: 'http://localhost:8000/card',
    data: card,
  });

  return res;
};
