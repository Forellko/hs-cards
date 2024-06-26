import axios from 'axios';
import ICard from 'types/Card';

export const CreateCard = async (card: ICard) => {
  const response = await axios({
    method: 'post',
    data: card,
    url: 'http://localhost:8000/card',
  });

  console.log(response);
};
