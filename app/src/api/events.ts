import axios from 'axios';
import { getItem } from '@utils/storage';

const API_BASE_URL = 'http://localhost:3526';

// Interfaces
interface IEventData {
  title: string;
  description: string;
  dateRange: string;
  location: string;
  image: string;
}

interface IEventResponse {
  _id: string;
  title: string;
  description: string;
  dateRange: string;
  location: string;
  image: string;
}

interface IDeleteResponse {
  message: string;
  event: IEventResponse;
}

// Função para obter o token armazenado
const getAuthToken = async (): Promise<string | null> => {
  const token = await getItem('token');
  return token;
};

// Função para criar um novo evento
export const createEvent = async (eventData: IEventData): Promise<IEventResponse> => {
  try {
    const token = await getAuthToken();
    if (!token) throw new Error('Token not found');
    const response = await axios.post<IEventResponse>(
      `${API_BASE_URL}/events`,
      eventData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Função para obter todos os eventos
export const getAllEvents = async (): Promise<IEventResponse[]> => {
  try {
    const token = await getAuthToken();
    if (!token) throw new Error('Token not found');
    const response = await axios.get<IEventResponse[]>(`${API_BASE_URL}/events`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Função para obter um evento pelo ID
export const getEventById = async (eventId: string): Promise<IEventResponse> => {
  try {
    const token = await getAuthToken();
    if (!token) throw new Error('Token not found');
    const response = await axios.get<IEventResponse>(`${API_BASE_URL}/events/${eventId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Função para atualizar um evento pelo ID
export const updateEvent = async (eventId: string, updateData: Partial<IEventData>): Promise<IEventResponse> => {
  try {
    const token = await getAuthToken();
    if (!token) throw new Error('Token not found');
    const response = await axios.patch<IEventResponse>(
      `${API_BASE_URL}/events/${eventId}`,
      updateData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Função para deletar um evento pelo ID
export const deleteEvent = async (eventId: string): Promise<IDeleteResponse> => {
  try {
    const token = await getAuthToken();
    if (!token) throw new Error('Token not found');
    const response = await axios.delete<IDeleteResponse>(`${API_BASE_URL}/events/${eventId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
