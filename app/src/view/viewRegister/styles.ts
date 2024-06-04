import themes from '@themes/themes';
import styled from 'styled-components/native';

export const Container = styled.View<{ themeSelected: string }>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${({ themeSelected }) =>
    themeSelected === 'dark' ? '#333' : '#f0f0f0'};
`;

export const Contents = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;

export const Header = styled.View`
  margin-bottom: 20px;
  align-items: center;
  margin: 0 4%;
`;

export const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #734E00;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  color: #555;
  margin-bottom: 20px;
`;

export const Form = styled.View`
  margin: 25px;
`;

export const Buttons = styled.View`
  margin: 0 4%;
  align-items: center;
  margin-bottom: 8px;
`;

export const Button = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;

export const InputForm = styled.View`
  flex-direction: row;
`;

export const InputFormCol1 = styled.View`
  flex-direction: column;
  flex-grow: 2;
  margin-right: 15px;
`;

export const InputFormCol2 = styled.View`
  flex-direction: column;
  flex-grow: 2;
`;

export const Footer = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

export const FooterBase = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 45px;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const TitleFooter = styled.Text`
  display: flex;
  font-family: 'Itim_400Regular';
  font-size: 16px;
  color: #717070;
`;

export const TitleFooterSpan = styled.Text`
  display: flex;
  font-size: 16px;
  color: ${themes.default.colors.v10};
  margin: 0 5px;
  font-family: 'Itim_400Regular';
`;

export const FormBase = styled.View`
  display: flex;
  background-color: #baeaff;
  border-radius: 8px;
  border-color: #a4e1ff;
  border-width: 1px;
  margin: 0 7%;
  margin-top: 15px;
`;

export const Logo = styled.View`
  display: flex;
  width: 40%;  
`;