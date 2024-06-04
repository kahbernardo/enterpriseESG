import { EButtonType } from 'domains/enums/EButtons';
import styled from 'styled-components';
import themes from 'themes/index';

interface IContainerProps {
  type: EButtonType;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: row;
  background-color: ${({ type }) => (type === 3 ? '#BCCBD1' : '#21BDFA')};
  color: ${({ type }) => (type === 3 ? '#FFF' : '#FFF')};
  border: none;
  border-radius: 15px;
  height: 47px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  margin:10px;

`;

interface ITitleProps {
  type: EButtonType;
}

export const Title = styled.div<ITitleProps>`
  display: flex;
  text-align: center;
  font-size: 25px;
  font-family: ${themes.fontFamily.inter};
  font-weight: 500;
  letter-spacing: 1px;
  margin: 10px;
  flex-wrap: wrap;
  line-height: 35px;

  color: ${({ type }) => (type === 3 ? '#FFF' : '#FFFFFF')};
`;
