import React from 'react';
import styled from 'styled-components';

export const Card = styled.div`
  width: 256px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  margin: 15px 0;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  background-color: red;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 16px;
  flex-direction: column;
`;

export const Name = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

export const Profession = styled.p`
  margin: 4px 0;
  font-size: 14px;
  color: #777;
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #777;
  border-top: 1px solid #eee;
  padding: 15px 0;
  cursor: pointer;
`;

export const LocationIcon = styled.span`
  margin-right: 4px;
  color: red;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 15px 0;
  border: none;
  border-top: 1px solid #eee;
  background-color: #fff;
  cursor: pointer;
  color: #777;
  font-size: 14px;
  text-align: start;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e8e8e8;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 25px;
`;
