import React from 'react';
import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 12px;
  height: 77px;
  width: 80%;
  border-color: #598393;
  margin: 35px;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;

export const IconWrapper = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
  position: absolute;
  left: -5px;
  top: -18px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  display: flex;
  width: 100%;
  height: 73px;
  margin-left: 127px;
`;
