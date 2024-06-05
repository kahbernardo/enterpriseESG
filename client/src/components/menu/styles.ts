import styled, { css } from 'styled-components';
import themes from 'themes/index';

const cssActive = css`
  font-weight: 900;
  font-size: 19px;
  font-family: ${themes.fontFamily.koulen};
  letter-spacing: 2.76px;
  color: ${themes.colors.v8};

  &:hover {
    color: #a457ed;
  }

  &:active {
    color: #64368e;
  }
`;

const cssDesactive = css`
  font-weight: 100;
  letter-spacing: 2.76px;
  font-family: ${themes.fontFamily.koulen};
  font-size: 19px;
  color: #272727;

  &:hover {
    color: #a457ed;
  }

  &:active {
    color: #64368e;
  }
`;

export const Container = styled.div`
  display: flex;
flex-direction:column;
height: fit-content;
background-color:red;
`;

interface IButton {
  active: boolean;
}

export const Button = styled.div<IButton>`
  display: flex;
  cursor: pointer;
  margin: 8px 30px;
  text-transform: uppercase;
  ${(p: IButton) => (p.active == true ? cssActive : cssDesactive)};
  color: #565656;
  font-family: ${themes.fontFamily.koulen};
`;


export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #325e70;
  width:100vw;
  height: 80px;
  padding:5px 0;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin: 0 20px;
  flex-direction:column;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  &:hover {
    color: #21BDFA;
  }
`;


export const ProfileItem = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin-left:20px;
  flex-direction:column;
  cursor: pointer;
  justify-content:center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  &:hover {
    color: #21BDFA;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 5px 10px;
  margin-left:200px

  input {
    border: none;
    outline: none;
    margin-left: 5px;
  }
`;