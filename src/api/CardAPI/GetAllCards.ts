import axios from 'axios';
import ICard from 'types/Card';

export async function GetAllCards(): Promise<ICard[]> {
  const response = await axios({
    method: 'get',
    url: 'http://localhost:8000/cards',
  });
  const data: ICard[] = response.data;

  return data;
}
