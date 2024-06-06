import React from 'react';
import styled from 'styled-components';

export const Card = styled.div`
  width: 65px;
  height: 63px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #333;
  text-align: center;
`;

export const Address = styled.p`
  margin: 4px 0;
  font-size: 12px;
  color: #777;
  text-align: center;
`;
