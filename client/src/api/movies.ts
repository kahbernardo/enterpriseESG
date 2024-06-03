import axios from 'axios';
import { ILoginResponse, IMovie } from 'domains/interfaces/api';
import { IMovieRegister } from 'domains/interfaces/movies';

const API_BASE_URL = 'http://localhost:3526';

const list = async (): Promise<IMovie[]> => {
  try {
    const token = localStorage.getItem('token');
    const response: any = await axios.get(`${API_BASE_URL}/movie`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const movies: IMovie[] = (response?.data as IMovie[]) || [];
    localStorage.setItem('movies', JSON.stringify(movies));
    return movies;
  } catch (error) {
    return [];
  }
};

const register = async (movie:IMovieRegister): Promise<IMovie[]> => {
  try {
    const token = localStorage.getItem('token');
    const response: any = await axios.post(`${API_BASE_URL}/movie`, movie, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const movies: IMovie[] = (response?.data as IMovie[]) || [];
    localStorage.setItem('movies', JSON.stringify(movies));
    return movies;
  } catch (error) {
    return [];
  }
};

export default {
  list,
  register
};
