import axios from 'axios';
import { getItem } from '@utils/storage';

const API_BASE_URL = 'http://localhost:3526';

// Interfaces
interface IPostData {
  user: string;
  content: string;
  images: string[];
}

interface IPostResponse {
  _id: string;
  user: string;
  content: string;
  images: string[];
  likes: number;
  comments: Array<{
    user: string;
    comment: string;
    timestamp: string;
  }>;
  shares: number;
  timestamp: string;
}

interface IDeleteResponse {
  message: string;
  post: IPostResponse;
}

// Função para obter o token armazenado
const getAuthToken = async (): Promise<string | null> => {
  const token = await getItem('token');
  return token;
};

// Função para criar um novo post
export const createPost = async (postData: IPostData): Promise<IPostResponse> => {
  try {
    const token = await getAuthToken();
    if (!token) throw new Error('Token not found');
    const response = await axios.post<IPostResponse>(
      `${API_BASE_URL}/posts`,
      postData,
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

// Função para obter todos os posts
export const getAllPosts = async (): Promise<IPostResponse[]> => {
  try {
    const token = await getAuthToken();
    if (!token) throw new Error('Token not found');
    const response = await axios.get<IPostResponse[]>(`${API_BASE_URL}/posts`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Função para obter um post pelo ID
export const getPostById = async (postId: string): Promise<IPostResponse> => {
  try {
    const token = await getAuthToken();
    if (!token) throw new Error('Token not found');
    const response = await axios.get<IPostResponse>(`${API_BASE_URL}/posts/${postId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Função para atualizar um post pelo ID
export const updatePost = async (postId: string, updateData: Partial<IPostData>): Promise<IPostResponse> => {
  try {
    const token = await getAuthToken();
    if (!token) throw new Error('Token not found');
    const response = await axios.patch<IPostResponse>(
      `${API_BASE_URL}/posts/${postId}`,
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

// Função para deletar um post pelo ID
export const deletePost = async (postId: string): Promise<IDeleteResponse> => {
  try {
    const token = await getAuthToken();
    if (!token) throw new Error('Token not found');
    const response = await axios.delete<IDeleteResponse>(`${API_BASE_URL}/posts/${postId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
